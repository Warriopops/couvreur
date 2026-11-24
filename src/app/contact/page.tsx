import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact et devis gratuit",
  description:
    "Demandez un devis gratuit à Couvreur BDX : toiture autour de Coutras, Bordeaux et Bergerac. Tél. 07 80 07 45 45.",
  path: "/contact",
  keywords: [
    "devis couvreur Coutras",
    "devis toiture Bordeaux",
    "devis toiture Bergerac",
    "contacter couvreur Chamadelle",
    "Couvreur BDX téléphone",
  ],
});

export default function ContactPage() {
  return (
    <div className="bg-canvas">
      <div className="shell grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start sm:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-ink sm:text-5xl">
            Parlons de votre toiture
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-stone">
            Décrivez brièvement le besoin (fuite, démoussage, rénovation…). On vous rappelle
            pour caler une visite (Coutras, Bordeaux, Bergerac et environs).
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                Téléphone
              </dt>
              <dd className="mt-2">
                <a
                  href={site.phoneHref}
                  className="text-2xl font-medium text-ink hover:text-accent"
                >
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                E-mail
              </dt>
              <dd className="mt-2">
                <a href={site.emailHref} className="text-lg text-ink hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone">
                Zone
              </dt>
              <dd className="mt-2 text-ink">{site.areaServed}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href={site.phoneHref} variant="accent">
              Appeler maintenant
            </ButtonLink>
            <ButtonLink href={site.emailHref} variant="ghost">
              Envoyer un e-mail
            </ButtonLink>
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-medium text-ink">Pour un devis utile</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-stone">
            <li>Adresse approximative ou commune (Coutras, Bordeaux, Bergerac…)</li>
            <li>Type de toiture si connu (tuiles, ardoise…)</li>
            <li>Urgence ou projet planifié</li>
            <li>Photos éventuelles des désordres</li>
          </ul>
          <p className="mt-6 text-sm text-stone">
            Devis et déplacement gratuits sous 48 h, sans engagement.
          </p>
        </aside>
      </div>
    </div>
  );
}
