import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Mentions légales",
  description: `Mentions légales du site ${site.name}.`,
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <div className="bg-canvas">
      <div className="shell max-w-3xl py-16 sm:py-20">
        <h1 className="text-4xl font-medium tracking-tight text-ink">Mentions légales</h1>
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-stone">
          <section>
            <h2 className="text-xl font-medium text-ink">Éditeur du site</h2>
            <p className="mt-3">
              Le site {site.domain} est édité sous le nom commercial{" "}
              <strong className="font-medium text-ink">{site.name}</strong> par :
            </p>
            <p className="mt-3">
              <strong className="font-medium text-ink">{site.legalName}</strong>
              <br />
              {site.legalForm}
              <br />
              {site.address}
              <br />
              {site.postalCode} {site.city}
              <br />
              {site.department} ({site.region})
            </p>
            <p className="mt-3">
              Date de création : {site.foundedLabel}
              <br />
              SIREN : {site.siren}
              <br />
              SIRET : {site.siret}
              <br />
              Code NAF / APE : {site.naf}, {site.nafLabel}
            </p>
            <p className="mt-3">
              Responsable de la publication : {site.director}
              <br />
              E-mail :{" "}
              <a href={site.emailHref} className="text-accent hover:underline">
                {site.email}
              </a>
              <br />
              Téléphone :{" "}
              <a href={site.phoneHref} className="text-accent hover:underline">
                {site.phone}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink">Hébergement</h2>
            <p className="mt-3">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723, États-Unis
              <br />
              Site :{" "}
              <a
                href="https://vercel.com"
                className="text-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink">Propriété intellectuelle</h2>
            <p className="mt-3">
              L’ensemble des contenus du site {site.domain} (textes, structure, éléments
              graphiques, logos) est protégé par le droit de la propriété intellectuelle. Toute
              reproduction, représentation ou diffusion, totale ou partielle, sans autorisation
              écrite préalable de {site.legalName}, est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink">Données personnelles</h2>
            <p className="mt-3">
              Les informations éventuellement collectées via le site (formulaire de contact,
              e-mail, téléphone) sont destinées uniquement au traitement de votre demande et ne
              sont pas cédées à des tiers. Conformément au RGPD, vous pouvez demander l’accès,
              la rectification ou la suppression de vos données en écrivant à{" "}
              <a href={site.emailHref} className="text-accent hover:underline">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
