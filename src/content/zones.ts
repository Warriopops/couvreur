export type Zone = {
  slug: string;
  name: string;
  department: string;
  distance: string;
  intro: string;
  highlights: string[];
  seoTitle: string;
  seoDescription: string;
};

/** Villes et communes autour de Coutras pour le référencement local. */
export const zones: Zone[] = [
  {
    slug: "coutras",
    name: "Coutras",
    department: "Gironde (33)",
    distance: "Base d’intervention",
    intro:
      "Basés autour de Coutras, nous intervenons en priorité sur la commune et les quartiers proches : toitures de maisons individuelles, rénovations de couverture, zinguerie et dépannages après intempéries. Un artisan local, joignable facilement, qui connaît les constructions du secteur.",
    highlights: [
      "Interventions rapides sur Coutras centre et périphérie",
      "Devis de couverture et démoussage",
      "Suivi de chantier de proximité",
    ],
    seoTitle: "Couvreur à Coutras (33) | Couvreur BDX",
    seoDescription:
      "Couvreur artisan à Coutras : couverture, zinguerie, charpente et dépannage toiture. Devis gratuit dans le Libournais.",
  },
  {
    slug: "libourne",
    name: "Libourne",
    department: "Gironde (33)",
    distance: "~20 min de Coutras",
    intro:
      "À Libourne et sur l’agglomération, Couvreur BDX réalise vos travaux de toiture : réfection, gouttières, recherche de fuite et entretien. Un interlocuteur unique pour les maisons de ville comme pour les pavillons des communes limitrophes.",
    highlights: [
      "Couverture et zinguerie à Libourne",
      "Dépannage fuite après orage",
      "Rénovation de toitures anciennes",
    ],
    seoTitle: "Couvreur à Libourne | Couvreur BDX",
    seoDescription:
      "Artisan couvreur à Libourne et agglomération : couverture, zinguerie et dépannage. Intervention depuis Coutras.",
  },
  {
    slug: "saint-denis-de-pile",
    name: "Saint-Denis-de-Pile",
    department: "Gironde (33)",
    distance: "~10 min de Coutras",
    intro:
      "À Saint-Denis-de-Pile, nous prenons en charge couverture, démoussage et réparation de charpente. Commune voisine de Coutras : déplacements rapides, devis clair, chantier respectueux de votre habitation.",
    highlights: [
      "Proximité immédiate avec Coutras",
      "Entretien et démoussage de toiture",
      "Remplacement de tuiles et faîtages",
    ],
    seoTitle: "Couvreur Saint-Denis-de-Pile | Couvreur BDX",
    seoDescription:
      "Couvreur à Saint-Denis-de-Pile : toiture, zinguerie et entretien. Artisan local basé près de Coutras.",
  },
  {
    slug: "les-eglisottes-et-chalaures",
    name: "Les Églisottes-et-Chalaures",
    department: "Gironde (33)",
    distance: "~15 min de Coutras",
    intro:
      "Sur Les Églisottes-et-Chalaures, Couvreur BDX intervient pour la rénovation de couverture, la zinguerie et le traitement antimousse. Un service de proximité pour les maisons du bourg et des hameaux alentour.",
    highlights: [
      "Réfection de toiture",
      "Gouttières et évacuation des eaux",
      "Conseils entretien adaptés au climat local",
    ],
    seoTitle: "Couvreur Les Églisottes-et-Chalaures | Couvreur BDX",
    seoDescription:
      "Couvreur aux Églisottes-et-Chalaures : couverture et zinguerie par un artisan du secteur de Coutras.",
  },
  {
    slug: "guitres",
    name: "Guîtres",
    department: "Gironde (33)",
    distance: "~15 min de Coutras",
    intro:
      "À Guîtres, nous couvrons vos besoins toiture : pose, réparation, isolation des combles et recherche d’infiltration. Intervention soignée sur le patrimoine local comme sur les constructions plus récentes.",
    highlights: [
      "Travaux de couverture à Guîtres",
      "Diagnostic fuite et réparation",
      "Isolation sous toiture",
    ],
    seoTitle: "Couvreur à Guîtres | Couvreur BDX",
    seoDescription:
      "Artisan couvreur à Guîtres : rénovation de toiture, zinguerie et dépannage depuis Coutras.",
  },
  {
    slug: "abzac",
    name: "Abzac",
    department: "Gironde (33)",
    distance: "~10 min de Coutras",
    intro:
      "Abzac fait partie de notre zone d’intervention quotidienne. Couverture, zinguerie, démoussage : on se déplace rapidement pour un devis ou un dépannage toiture.",
    highlights: [
      "Interventions fréquentes sur Abzac",
      "Entretien et démoussage",
      "Remise en état après intempéries",
    ],
    seoTitle: "Couvreur à Abzac | Couvreur BDX",
    seoDescription:
      "Couvreur à Abzac (33) : couverture, gouttières et démoussage. Artisan local autour de Coutras.",
  },
  {
    slug: "saint-seurin-sur-l-isle",
    name: "Saint-Seurin-sur-l’Isle",
    department: "Gironde (33)",
    distance: "~20 min de Coutras",
    intro:
      "À Saint-Seurin-sur-l’Isle, Couvreur BDX assure couverture, charpente légère et zinguerie. Un artisan du Libournais pour vos projets de rénovation toiture ou vos urgences d’infiltration.",
    highlights: [
      "Rénovation de couverture",
      "Zinguerie complète",
      "Dépannage après pluie",
    ],
    seoTitle: "Couvreur Saint-Seurin-sur-l’Isle | Couvreur BDX",
    seoDescription:
      "Couvreur à Saint-Seurin-sur-l’Isle : toiture, zinguerie et dépannage. Intervention depuis Coutras.",
  },
  {
    slug: "montpon-menesterol",
    name: "Montpon-Ménestérol",
    department: "Dordogne (24)",
    distance: "~25 min de Coutras",
    intro:
      "Nous intervenons aussi à Montpon-Ménestérol et alentours, juste de l’autre côté de la limite Gironde-Dordogne. Même exigence de chantier, même clarté de devis pour vos travaux de toiture.",
    highlights: [
      "Couverture et zinguerie à Montpon",
      "Déplacement depuis Coutras",
      "Entretien de toitures résidentielles",
    ],
    seoTitle: "Couvreur Montpon-Ménestérol | Couvreur BDX",
    seoDescription:
      "Couvreur à Montpon-Ménestérol : couverture et dépannage toiture, artisan basé près de Coutras.",
  },
  {
    slug: "saint-medard-de-guizieres",
    name: "Saint-Médard-de-Guizières",
    department: "Gironde (33)",
    distance: "~15 min de Coutras",
    intro:
      "Sur Saint-Médard-de-Guizières, nous réalisons couverture, démoussage et réparation de gouttières. Un artisan accessible, habitué aux toitures du nord-Libournais.",
    highlights: [
      "Travaux de toiture locaux",
      "Démoussage et traitement",
      "Devis gratuit sur place",
    ],
    seoTitle: "Couvreur Saint-Médard-de-Guizières | Couvreur BDX",
    seoDescription:
      "Couvreur à Saint-Médard-de-Guizières : couverture, zinguerie et entretien autour de Coutras.",
  },
  {
    slug: "pineuilh",
    name: "Pineuilh",
    department: "Gironde (33)",
    distance: "~30 min de Coutras",
    intro:
      "À Pineuilh et dans le secteur de Sainte-Foy, Couvreur BDX propose couverture, zinguerie et isolation des combles. Intervention planifiée pour les rénovations comme pour les urgences.",
    highlights: [
      "Rénovation de toiture à Pineuilh",
      "Zinguerie et évacuation des eaux",
      "Isolation des combles",
    ],
    seoTitle: "Couvreur à Pineuilh | Couvreur BDX",
    seoDescription:
      "Artisan couvreur à Pineuilh : toiture, gouttières et isolation. Zone d’intervention depuis Coutras.",
  },
  {
    slug: "sainte-foy-la-grande",
    name: "Sainte-Foy-la-Grande",
    department: "Gironde (33)",
    distance: "~30 min de Coutras",
    intro:
      "Sainte-Foy-la-Grande fait partie de notre périmètre d’intervention. Nous prenons en charge la réfection de couverture, la recherche de fuite et l’entretien des toitures du centre et des communes proches.",
    highlights: [
      "Couverture en centre-ville et périphérie",
      "Diagnostic d’infiltration",
      "Chantiers soignés sur bâti ancien",
    ],
    seoTitle: "Couvreur Sainte-Foy-la-Grande | Couvreur BDX",
    seoDescription:
      "Couvreur à Sainte-Foy-la-Grande : couverture, zinguerie et dépannage. Artisan du secteur Coutras.",
  },
  {
    slug: "castillon-la-bataille",
    name: "Castillon-la-Bataille",
    department: "Gironde (33)",
    distance: "~35 min de Coutras",
    intro:
      "À Castillon-la-Bataille, nous intervenons pour vos projets de toiture et vos dépannages. Couvreur BDX apporte un savoir-faire artisanal sur les couvertures typiques de la région.",
    highlights: [
      "Réfection et entretien de toiture",
      "Zinguerie sur mesure",
      "Devis détaillé avant travaux",
    ],
    seoTitle: "Couvreur Castillon-la-Bataille | Couvreur BDX",
    seoDescription:
      "Couvreur à Castillon-la-Bataille : travaux de toiture et zinguerie, intervention depuis Coutras.",
  },
  {
    slug: "fronsac",
    name: "Fronsac",
    department: "Gironde (33)",
    distance: "~25 min de Coutras",
    intro:
      "Sur Fronsac et le vignoble voisin, nous réalisons couverture, charpente et zinguerie pour habitations et dépendances. Un chantier propre, adapté aux contraintes du bâti local.",
    highlights: [
      "Toitures de maisons et chais",
      "Remise en état après intempéries",
      "Conseils matériaux durables",
    ],
    seoTitle: "Couvreur à Fronsac | Couvreur BDX",
    seoDescription:
      "Artisan couvreur à Fronsac : couverture, charpente et zinguerie. Zone couverte depuis Coutras.",
  },
  {
    slug: "saint-emilion",
    name: "Saint-Émilion",
    department: "Gironde (33)",
    distance: "~30 min de Coutras",
    intro:
      "À Saint-Émilion et alentours, Couvreur BDX intervient sur les toitures, y compris les bâtiments plus anciens. Devis clair, matériaux adaptés, finitions soignées.",
    highlights: [
      "Respect du bâti traditionnel",
      "Couverture et zinguerie",
      "Entretien préventif",
    ],
    seoTitle: "Couvreur à Saint-Émilion | Couvreur BDX",
    seoDescription:
      "Couvreur à Saint-Émilion : rénovation de toiture et zinguerie par un artisan basé près de Coutras.",
  },
];

export function getZone(slug: string): Zone | undefined {
  return zones.find((zone) => zone.slug === slug);
}
