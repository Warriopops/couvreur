export type Review = {
  initials: string;
  name: string;
  place: string;
  date: string;
  text: string;
  tag: string;
  rating: number;
};

/** Avis publics issus d’AlloVoisins : https://www.allovoisins.com/p/jorisloubere#avis */
export const reviews: Review[] = [
  {
    initials: "JP",
    name: "Jacques P.",
    place: "Libourne",
    date: "août 2022",
    text: "Parfait",
    tag: "Couverture toiture",
    rating: 5,
  },
  {
    initials: "SM",
    name: "Sandrine M.",
    place: "Libourne",
    date: "septembre 2022",
    text: "Bon contact, est venu sur place afin vérifier les mesures. Prestation effectuée rapidement.",
    tag: "Clôture / Grillage",
    rating: 4,
  },
  {
    initials: "LM",
    name: "Laure M.",
    place: "Libourne",
    date: "octobre 2022",
    text: "Pour l’instant ponctuel, efficace, certainement les travaux seront faits par cette personne.",
    tag: "Clôture / Grillage",
    rating: 5,
  },
  {
    initials: "BH",
    name: "Bernard H.",
    place: "Libourne",
    date: "janvier 2023",
    text: "Bon contact, bon suivi. Sympa. Les travaux ne seront effectués qu’après acceptation par les assurances…",
    tag: "Clôture / Grillage",
    rating: 4,
  },
];

export const reviewsSummary = {
  rating: "4,6",
  count: 5,
  countLabel: "5 avis AlloVoisins",
  sourceUrl: "https://www.allovoisins.com/p/jorisloubere#avis",
  sourceName: "AlloVoisins",
};
