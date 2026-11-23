import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { services } from "@/content/services";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Services toiture & extérieur",
  description:
    "Pose, entretien et nettoyage de toiture, taille de haies et terrassement autour de Coutras.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-canvas">
      <div className="shell py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Services</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-medium tracking-tight text-ink sm:text-5xl">
          Toiture et extérieur, autour de Coutras
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone">
          Pose, entretien et nettoyage de toiture, taille de haies ou d’arbustes, et
          terrassement. Chaque chantier est suivi du début jusqu’à la fin.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative isolate flex min-h-[16rem] overflow-hidden rounded-2xl border border-border-dark bg-dark"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-dark/25" />
                <div className="relative mt-auto p-5 text-white">
                  <h2 className="text-2xl font-medium">{service.shortTitle}</h2>
                  <p className="mt-2 text-sm text-white/75">{service.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <ButtonLink href="/contact" variant="accent">
            Demander un devis gratuit
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
