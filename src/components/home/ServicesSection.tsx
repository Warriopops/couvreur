import Image from "next/image";
import Link from "next/link";
import { featuredServices } from "@/content/services";

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-canvas text-ink">
      <div className="shell">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Nos prestations</h2>
          <p className="mt-4 text-base leading-relaxed text-stone">
            Pose, entretien et nettoyage de toiture, taille de haies ou d’arbustes, et
            terrassement — Coutras, Bordeaux, Bergerac et environs.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, index) => (
            <li key={service.slug} className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative isolate flex min-h-[18rem] overflow-hidden rounded-2xl border border-border-dark bg-dark"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-dark/20" />
                <div className="relative mt-auto flex w-full flex-col p-6 text-white">
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent-light">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight">{service.shortTitle}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/75">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent-light">
                    Découvrir <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
