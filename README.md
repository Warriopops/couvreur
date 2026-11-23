# Couvreur BDX

Site vitrine Next.js pour un artisan couvreur autour de **Coutras** (Libournais / Gironde), prêt à déployer sur **Vercel**.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Contenu à personnaliser

- `src/lib/site.ts` — nom, téléphone, e-mail, domaine
- `src/content/services.ts` — prestations
- `src/content/zones.ts` — communes SEO autour de Coutras
- `src/app/mentions-legales/page.tsx` — SIRET, adresse complète

## Déploiement Vercel

1. Créer un projet Vercel lié à ce dépôt
2. Framework : Next.js (détecté via `vercel.json`)
3. Variables d’environnement : aucune requise pour démarrer
4. Domaine : pointer `couvreur-bdx.net` vers Vercel

## Structure

- `/` — accueil artisan
- `/services` & `/services/[slug]` — prestations
- `/zones/[slug]` — pages locales SEO (Coutras, Libourne, Guîtres…)
- `/contact` — devis / téléphone / e-mail
- `sitemap.xml` & `robots.txt` générés automatiquement
