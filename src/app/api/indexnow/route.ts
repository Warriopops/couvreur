import { NextRequest, NextResponse } from "next/server";
import { getIndexableUrls, submitIndexNow } from "@/lib/indexnow";
import { absoluteUrl } from "@/lib/seo";

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.INDEXNOW_SECRET;
  if (!secret) return false;

  const header = request.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;

  const query = request.nextUrl.searchParams.get("secret");
  return query === secret;
}

/**
 * POST /api/indexnow — soumet les URLs du site (ou une liste) à IndexNow.
 * Auth : Authorization: Bearer $INDEXNOW_SECRET ou ?secret=
 *
 * Body JSON optionnel : { "urls": ["https://…"] }
 */
export async function POST(request: NextRequest) {
  if (!process.env.INDEXNOW_SECRET) {
    return NextResponse.json(
      { error: "INDEXNOW_SECRET non configuré sur Vercel" },
      { status: 503 },
    );
  }

  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  let urls = getIndexableUrls();
  try {
    const body = (await request.json()) as { urls?: string[] };
    if (Array.isArray(body.urls) && body.urls.length > 0) {
      urls = body.urls.map((u) =>
        u.startsWith("http") ? u : absoluteUrl(u),
      );
    }
  } catch {
    // body vide = toutes les URLs
  }

  const result = await submitIndexNow(urls);

  return NextResponse.json(
    {
      ok: result.ok,
      status: result.status,
      submitted: result.submitted,
      detail: result.body || undefined,
    },
    { status: result.ok ? 200 : 502 },
  );
}

/** GET : même action (pratique pour un deploy hook / curl). */
export async function GET(request: NextRequest) {
  return POST(request);
}
