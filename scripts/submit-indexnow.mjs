#!/usr/bin/env node
/**
 * Soumet toutes les URLs du site à IndexNow (Bing & partenaires).
 * Usage : npm run indexnow
 * Option : INDEXNOW_URLS="https://…,https://…" npm run indexnow
 */

const HOST = "couvreur-bdx.net";
const KEY = "4f844d506563f7f1f2421c46791ce15b";
const BASE = `https://${HOST}`;
const KEY_LOCATION = `${BASE}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

const STATIC = ["/", "/services", "/contact", "/mentions-legales"];
const SERVICES = [
  "pose-toiture",
  "entretien-toiture",
  "nettoyage-toiture",
  "taille-haies",
  "terrassement",
  "fuite-toiture",
];
const ZONES = [
  "coutras",
  "libourne",
  "saint-denis-de-pile",
  "les-eglisottes-et-chalaures",
  "guitres",
  "abzac",
  "saint-seurin-sur-l-isle",
  "montpon-menesterol",
  "saint-medard-de-guizieres",
  "pineuilh",
  "sainte-foy-la-grande",
  "castillon-la-bataille",
  "fronsac",
  "saint-emilion",
];

function defaultUrls() {
  return [
    ...STATIC.map((p) => (p === "/" ? BASE : `${BASE}${p}`)),
    ...SERVICES.map((s) => `${BASE}/services/${s}`),
    ...ZONES.map((z) => `${BASE}/zones/${z}`),
  ];
}

const fromEnv = process.env.INDEXNOW_URLS?.split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const urlList = fromEnv?.length ? fromEnv : defaultUrls();

const payload = {
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

const text = await res.text().catch(() => "");
console.log(
  JSON.stringify(
    {
      status: res.status,
      ok: res.ok || res.status === 202,
      submitted: urlList.length,
      body: text || null,
    },
    null,
    2,
  ),
);

if (!(res.ok || res.status === 202)) process.exit(1);
