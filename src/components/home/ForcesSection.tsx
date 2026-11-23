const forces = [
  {
    title: "Pose de toiture",
    text: "Couverture neuve ou réfection complète, chantier suivi jusqu’au bout.",
  },
  {
    title: "Entretien et nettoyage",
    text: "Entretien, nettoyage et démoussage pour garder une toiture en bon état.",
  },
  {
    title: "Taille de haies",
    text: "Taille de haies et d’arbustes autour de la maison.",
  },
  {
    title: "Terrassement",
    text: "Préparation et nivellement de terrain.",
  },
];

export function ForcesSection() {
  return (
    <section className="section-padding bg-dark text-on-dark">
      <div className="shell">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          Ce qu’on fait
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-tight sm:text-4xl">
          Nos forces
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-dark">
          Artisan depuis 15 ans pour la toiture et les travaux extérieurs autour de Coutras.
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {forces.map((item, index) => (
            <li key={item.title} className="border-t border-border-dark pt-5">
              <p className="text-sm font-semibold tracking-[0.16em] text-accent-light">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-dark">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
