import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getService, services } from "@/content/services";
import { zones } from "@/content/zones";
import { breadcrumbJsonLd, createMetadata, serviceJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createMetadata({
    title: service.seoTitle.replace(` | ${site.name}`, ""),
    description: service.seoDescription,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.shortTitle} Coutras`,
      `${service.shortTitle} Libourne`,
      `${service.shortTitle} Chamadelle`,
      `couvreur ${service.shortTitle.toLowerCase()}`,
      site.shortName,
    ],
    ogImage: service.image,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const nearby = zones.slice(0, 6);

  return (
    <article className="bg-canvas">
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortTitle, path: `/services/${service.slug}` },
          ]),
        ]}
      />
      <div className="shell py-16 sm:py-20">
        <div className="relative mb-10 aspect-[21/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={service.image}
            alt={`${service.title} par ${site.name} à Coutras`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 72rem"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
        </div>

        <nav aria-label="Fil d’Ariane" className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <Link href="/" className="hover:text-ink">
            Accueil
          </Link>
          {" / "}
          <Link href="/services" className="hover:text-ink">
            Services
          </Link>
          {" / "}
          <span className="text-ink">{service.shortTitle}</span>
        </nav>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          {service.title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">{service.intro}</p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {service.points.map((point) => (
            <li
              key={point}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="accent">
            Demander un devis
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="ghost">
            {site.phone}
          </ButtonLink>
        </div>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-2xl font-medium text-ink">
            Aussi disponible autour de Coutras, Bordeaux et Bergerac
          </h2>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {nearby.map((zone) => (
              <li key={zone.slug}>
                <Link href={`/zones/${zone.slug}`} className="text-stone hover:text-accent">
                  {service.shortTitle} à {zone.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
