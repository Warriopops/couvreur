import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { services } from "@/content/services";
import { getZone, zones } from "@/content/zones";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return zones.map((zone) => ({ slug: zone.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/zones/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) return {};

  return createMetadata({
    title: zone.seoTitle.replace(` | ${site.name}`, ""),
    description: zone.seoDescription,
    path: `/zones/${zone.slug}`,
  });
}

export default async function ZonePage({ params }: PageProps<"/zones/[slug]">) {
  const { slug } = await params;
  const zone = getZone(slug);
  if (!zone) notFound();

  const otherZones = zones.filter((item) => item.slug !== zone.slug).slice(0, 8);

  return (
    <article className="bg-canvas">
      <div className="shell py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Zone d’intervention, {zone.department}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Couvreur à {zone.name}
        </h1>
        <p className="mt-2 text-sm text-stone">{zone.distance}</p>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">{zone.intro}</p>

        <ul className="mt-10 space-y-3">
          {zone.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-ink">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <section className="mt-12">
          <h2 className="text-2xl font-medium text-ink">Nos services à {zone.name}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
                >
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="accent">
            Devis à {zone.name}
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="ghost">
            Appeler {site.phone}
          </ButtonLink>
        </div>

        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-medium text-ink">Autres communes</h2>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-stone">
            {otherZones.map((item) => (
              <li key={item.slug}>
                <Link href={`/zones/${item.slug}`} className="hover:text-accent">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
