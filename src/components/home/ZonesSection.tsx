import Link from "next/link";
import { zones } from "@/content/zones";
import { site } from "@/lib/site";

export function ZonesSection() {
  return (
    <section id="zones" className="section-padding bg-canvas text-ink">
      <div className="shell">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Zone d’intervention</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
          Basés à {site.city}, {site.radiusNote.toLowerCase()}.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map((zone) => (
            <li key={zone.slug}>
              <Link
                href={`/zones/${zone.slug}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
              >
                <span>Couvreur à {zone.name}</span>
                <span className="text-xs font-normal text-stone">{zone.distance}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
