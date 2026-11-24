import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <Image
        src="/images/hero-toiture.jpg"
        alt="Artisan couvreur au travail sur une toiture"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/75 via-dark/55 to-dark/80" />

      <div className="shell relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-4 py-16 text-center">
        <h1 className="animate-rise max-w-4xl text-balance text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Couverture et entretien de toiture autour de Coutras
        </h1>
        <p className="animate-rise-delay mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          Artisan depuis {site.yearsExperience} ans. Pose, entretien et nettoyage de toiture,
          taille de haies et terrassement. Jusqu’à Bordeaux et Bergerac, rayon ~100 km.
          Garantie décennale.
        </p>
        <div className="animate-rise-delay-2 mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href="/contact" variant="accent" className="min-w-[220px]">
            Demander un devis gratuit
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="light" className="min-w-[180px]">
            {site.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
