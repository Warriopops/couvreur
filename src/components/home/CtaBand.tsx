import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaBand() {
  return (
    <section className="border-y border-border bg-surface py-16 sm:py-20">
      <div className="shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Un projet de travaux ?
          </h2>
          <p className="mt-3 text-base text-stone">
            On répond à vos demandes. Devis gratuit, chantier suivi jusqu’à la fin.
          </p>
        </div>
        <ButtonLink href="/contact" variant="accent" className="min-w-[220px]">
          Demander un devis gratuit
        </ButtonLink>
      </div>
    </section>
  );
}
