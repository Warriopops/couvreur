import { site } from "@/lib/site";

const items = [
  {
    title: `${site.yearsExperience} ans d’expérience`,
    text: "Artisan depuis 15 ans dans le neuf et la rénovation.",
  },
  {
    title: "Garantie décennale",
    text: "Tous nos travaux ont une garantie décennale.",
  },
  {
    title: "Chantier suivi",
    text: "Travail soigné, suivi du début jusqu’à la fin des travaux.",
  },
  {
    title: "On vous répond",
    text: "Devis, entretien, nettoyage ou dépannage : on vous répond.",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding border-y border-border/60 bg-light text-ink">
      <div className="shell">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Confiance</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          Pourquoi nous faire confiance
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-stone">
          Devis et déplacement gratuits à Coutras, Bordeaux, Bergerac et dans un rayon
          d’environ 100 km.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <li key={item.title} className="border-t border-border pt-5">
              <p className="text-sm font-semibold tracking-[0.16em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-medium text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
