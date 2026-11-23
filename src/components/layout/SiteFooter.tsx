import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { featuredServices } from "@/content/services";
import { zones } from "@/content/zones";
import { site } from "@/lib/site";

export function SiteFooter() {
  const zoneLinks = zones.slice(0, 10);

  return (
    <footer className="bg-dark text-on-dark">
      <div className="shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-dark">
            Artisan depuis {site.yearsExperience} ans : pose, entretien et nettoyage de toiture,
            taille de haies et terrassement autour de Coutras.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-muted-dark">
            {site.address}
            <br />
            {site.postalCode} {site.city}
            <br />
            <a href={site.phoneHref} className="mt-2 inline-block text-on-dark hover:text-accent-light">
              Tél. : {site.phone}
            </a>
            <br />
            <a href={site.emailHref} className="hover:text-accent-light">
              {site.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
            Prestations
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-dark">
            {featuredServices.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-white">
                Tous les services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
            Zone d’intervention
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-dark">
            {zoneLinks.map((zone) => (
              <li key={zone.slug}>
                <Link href={`/zones/${zone.slug}`} className="hover:text-white">
                  Couvreur à {zone.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-light">
            Horaires
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-dark">
            {site.hours.map((item) => (
              <li key={item.day} className="flex justify-between gap-4">
                <span>{item.day}</span>
                <span className="text-on-dark/80">{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="shell flex flex-col gap-2 py-5 text-xs text-muted-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {site.name}. Tous droits réservés.
          </p>
          <Link href="/mentions-legales" className="hover:text-white">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
