import { services } from "@/content/services";
import { zones } from "@/content/zones";
import { absoluteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

/** Toutes les URLs indexables du site (alignées sur le sitemap). */
export function getIndexableUrls(): string[] {
  return [
    absoluteUrl("/"),
    absoluteUrl("/services"),
    absoluteUrl("/contact"),
    absoluteUrl("/mentions-legales"),
    ...services.map((s) => absoluteUrl(`/services/${s.slug}`)),
    ...zones.map((z) => absoluteUrl(`/zones/${z.slug}`)),
  ];
}

export type IndexNowResult = {
  ok: boolean;
  status: number;
  submitted: number;
  body: string;
};

/**
 * Soumet une liste d’URLs (ou tout le site) via IndexNow.
 * Partagé automatiquement avec Bing, Yandex, Seznam, Naver, etc.
 */
export async function submitIndexNow(
  urls: string[] = getIndexableUrls(),
): Promise<IndexNowResult> {
  const unique = [...new Set(urls)].filter((url) =>
    url.startsWith(site.url),
  );

  if (unique.length === 0) {
    return { ok: false, status: 400, submitted: 0, body: "Aucune URL valide" };
  }

  const payload = {
    host: site.domain,
    key: site.indexNowKey,
    keyLocation: absoluteUrl(`/${site.indexNowKey}.txt`),
    urlList: unique,
  };

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  const body = await response.text().catch(() => "");

  return {
    ok: response.ok || response.status === 202,
    status: response.status,
    submitted: unique.length,
    body,
  };
}
