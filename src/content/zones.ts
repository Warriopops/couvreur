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

/** Villes SEO dans un rayon d’environ 100 km (Coutras → Bordeaux, Bergerac…). */
export const zones: Zone[] = [
  {
    slug: "coutras",
    name: "Coutras",
    department: "Gironde (33)",
    distance: "Base d’intervention",
    intro:
      "Basés à Chamadelle, tout près de Coutras, nous intervenons en priorité sur la commune : pose de toiture, entretien, nettoyage, taille de haies et terrassement. Artisan local, joignable facilement.",
    highlights: [
      "Pose et entretien de toiture à Coutras",
      "Nettoyage et démoussage",
      "Devis gratuit sur place",
    ],
    seoTitle: "Couvreur à Coutras (33)",
    seoDescription:
      "Couvreur à Coutras : pose, entretien et nettoyage de toiture, taille de haies et terrassement. Devis gratuit, garantie décennale.",
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    department: "Gironde (33)",
    distance: "~55 km / ~50 min",
    intro:
      "Nous intervenons à Bordeaux et sur la métropole : pose de toiture, entretien, nettoyage, taille de haies et terrassement. Artisan basé à Chamadelle, déplacements réguliers vers Bordeaux et sa périphérie.",
    highlights: [
      "Pose et rénovation de toiture à Bordeaux",
      "Entretien et nettoyage de toiture",
      "Intervention métropole bordelaise",
    ],
    seoTitle: "Couvreur à Bordeaux",
    seoDescription:
      "Couvreur à Bordeaux : pose, entretien et nettoyage de toiture. Artisan basé près de Coutras, devis gratuit.",
  },
  {
    slug: "libourne",
    name: "Libourne",
    department: "Gironde (33)",
    distance: "~20 min de Coutras",
    intro:
      "À Libourne et sur l’agglomération, Couvreur BDX réalise pose de toiture, entretien, nettoyage et dépannage. Intervention depuis Chamadelle, devis clair.",
    highlights: [
      "Pose et réfection de toiture à Libourne",
      "Nettoyage de toiture",
      "Dépannage après intempéries",
    ],
    seoTitle: "Couvreur à Libourne",
    seoDescription:
      "Couvreur à Libourne : pose, entretien et nettoyage de toiture. Artisan basé près de Coutras, devis gratuit.",
  },
  {
    slug: "bergerac",
    name: "Bergerac",
    department: "Dordogne (24)",
    distance: "~55 km / ~50 min",
    intro:
      "À Bergerac et dans le Bergeracois, nous prenons en charge pose, entretien et nettoyage de toiture, ainsi que taille de haies et terrassement. Déplacement depuis Chamadelle dans un rayon d’environ 100 km.",
    highlights: [
      "Pose et entretien de toiture à Bergerac",
      "Nettoyage et démoussage",
      "Travaux extérieurs",
    ],
    seoTitle: "Couvreur à Bergerac",
    seoDescription:
      "Couvreur à Bergerac : pose, entretien et nettoyage de toiture. Artisan Gironde–Dordogne, devis gratuit.",
  },
  {
    slug: "saint-andre-de-cubzac",
    name: "Saint-André-de-Cubzac",
    department: "Gironde (33)",
    distance: "~40 min de Coutras",
    intro:
      "Sur Saint-André-de-Cubzac et le Cubzaguais, Couvreur BDX assure pose de toiture, entretien, nettoyage et dépannage. Sur la route entre Coutras et Bordeaux.",
    highlights: [
      "Pose de toiture à Saint-André-de-Cubzac",
      "Entretien et nettoyage",
      "Dépannage fuite",
    ],
    seoTitle: "Couvreur Saint-André-de-Cubzac",
    seoDescription:
      "Couvreur à Saint-André-de-Cubzac : pose et entretien de toiture. Intervention depuis Coutras vers Bordeaux.",
  },
  {
    slug: "blaye",
    name: "Blaye",
    department: "Gironde (33)",
    distance: "~55 min de Coutras",
    intro:
      "À Blaye et sur la rive droite de l’estuaire, nous intervenons pour la pose, l’entretien et le nettoyage de toiture, ainsi que les travaux extérieurs.",
    highlights: [
      "Pose et rénovation de toiture à Blaye",
      "Nettoyage de toiture",
      "Taille de haies",
    ],
    seoTitle: "Couvreur à Blaye",
    seoDescription:
      "Couvreur à Blaye : pose, entretien et nettoyage de toiture. Artisan basé près de Coutras.",
  },
  {
    slug: "perigueux",
    name: "Périgueux",
    department: "Dordogne (24)",
    distance: "~70 km / ~1 h",
    intro:
      "Nous nous déplaçons jusqu’à Périgueux et ses environs pour vos travaux de toiture, d’entretien et de nettoyage. Dans notre rayon d’environ 100 km depuis Chamadelle.",
    highlights: [
      "Pose et entretien de toiture à Périgueux",
      "Nettoyage de toiture",
      "Devis gratuit sur place",
    ],
    seoTitle: "Couvreur à Périgueux",
    seoDescription:
      "Couvreur à Périgueux : pose et entretien de toiture. Intervention depuis Coutras, rayon ~100 km.",
  },
  {
    slug: "saint-denis-de-pile",
    name: "Saint-Denis-de-Pile",
    department: "Gironde (33)",
    distance: "~10 min de Coutras",
    intro:
      "À Saint-Denis-de-Pile, nous prenons en charge pose, entretien et nettoyage de toiture, ainsi que taille de haies et terrassement. Commune voisine, déplacements rapides.",
    highlights: [
      "Proximité immédiate avec Coutras",
      "Entretien et nettoyage de toiture",
      "Taille de haies et terrassement",
    ],
    seoTitle: "Couvreur Saint-Denis-de-Pile",
    seoDescription:
      "Couvreur à Saint-Denis-de-Pile : toiture, nettoyage et entretien. Artisan local près de Coutras.",
  },
  {
    slug: "les-eglisottes-et-chalaures",
    name: "Les Églisottes-et-Chalaures",
    department: "Gironde (33)",
    distance: "~15 min de Coutras",
    intro:
      "Sur Les Églisottes-et-Chalaures, Couvreur BDX intervient pour la pose et l’entretien de toiture, le nettoyage et les travaux extérieurs.",
    highlights: [
      "Pose et rénovation de toiture",
      "Nettoyage de toiture",
      "Travaux extérieurs",
    ],
    seoTitle: "Couvreur Les Églisottes-et-Chalaures",
    seoDescription:
      "Couvreur aux Églisottes-et-Chalaures : pose et nettoyage de toiture par un artisan du secteur de Coutras.",
  },
  {
    slug: "guitres",
    name: "Guîtres",
    department: "Gironde (33)",
    distance: "~15 min de Coutras",
    intro:
      "À Guîtres, nous couvrons vos besoins toiture : pose, entretien, nettoyage et réparation de fuite. Intervention soignée, suivi jusqu’à la fin.",
    highlights: [
      "Pose de toiture à Guîtres",
      "Entretien et nettoyage",
      "Réparation après intempéries",
    ],
    seoTitle: "Couvreur à Guîtres",
    seoDescription:
      "Couvreur à Guîtres : pose, entretien et nettoyage de toiture. Intervention depuis Coutras.",
  },
  {
    slug: "abzac",
    name: "Abzac",
    department: "Gironde (33)",
    distance: "~10 min de Coutras",
    intro:
      "Abzac fait partie de notre zone d’intervention quotidienne. Pose, entretien, nettoyage de toiture, taille de haies : on se déplace rapidement.",
    highlights: [
      "Interventions fréquentes sur Abzac",
      "Entretien et nettoyage de toiture",
      "Taille de haies",
    ],
    seoTitle: "Couvreur à Abzac",
    seoDescription:
      "Couvreur à Abzac (33) : pose, entretien et nettoyage de toiture. Artisan local autour de Coutras.",
  },
  {
    slug: "saint-seurin-sur-l-isle",
    name: "Saint-Seurin-sur-l’Isle",
    department: "Gironde (33)",
    distance: "~20 min de Coutras",
    intro:
      "À Saint-Seurin-sur-l’Isle, Couvreur BDX assure pose de toiture, entretien, nettoyage et dépannage. Un artisan du Libournais pour vos projets ou urgences.",
    highlights: [
      "Pose et rénovation de toiture",
      "Nettoyage de toiture",
      "Dépannage après pluie",
    ],
    seoTitle: "Couvreur Saint-Seurin-sur-l’Isle",
    seoDescription:
      "Couvreur à Saint-Seurin-sur-l’Isle : pose et nettoyage de toiture. Intervention depuis Coutras.",
  },
  {
    slug: "montpon-menesterol",
    name: "Montpon-Ménestérol",
    department: "Dordogne (24)",
    distance: "~25 min de Coutras",
    intro:
      "Nous intervenons aussi à Montpon-Ménestérol, juste de l’autre côté de la limite Gironde–Dordogne. Même exigence de chantier pour vos travaux de toiture et extérieur.",
    highlights: [
      "Pose et entretien de toiture à Montpon",
      "Nettoyage de toiture",
      "Déplacement depuis Coutras",
    ],
    seoTitle: "Couvreur Montpon-Ménestérol",
    seoDescription:
      "Couvreur à Montpon-Ménestérol : pose et entretien de toiture, artisan basé près de Coutras.",
  },
  {
    slug: "mussidan",
    name: "Mussidan",
    department: "Dordogne (24)",
    distance: "~40 min de Coutras",
    intro:
      "À Mussidan et dans le secteur, Couvreur BDX réalise pose, entretien et nettoyage de toiture. Sur l’axe Coutras–Périgueux / Bergerac.",
    highlights: [
      "Pose de toiture à Mussidan",
      "Entretien et nettoyage",
      "Terrassement",
    ],
    seoTitle: "Couvreur à Mussidan",
    seoDescription:
      "Couvreur à Mussidan : pose et entretien de toiture. Intervention depuis Coutras, Dordogne (24).",
  },
  {
    slug: "saint-medard-de-guizieres",
    name: "Saint-Médard-de-Guizières",
    department: "Gironde (33)",
    distance: "~15 min de Coutras",
    intro:
      "Sur Saint-Médard-de-Guizières, nous réalisons pose, entretien et nettoyage de toiture. Artisan accessible, habitué aux toitures du nord-Libournais.",
    highlights: [
      "Travaux de toiture locaux",
      "Nettoyage et entretien",
      "Devis gratuit sur place",
    ],
    seoTitle: "Couvreur Saint-Médard-de-Guizières",
    seoDescription:
      "Couvreur à Saint-Médard-de-Guizières : pose, entretien et nettoyage de toiture autour de Coutras.",
  },
  {
    slug: "branne",
    name: "Branne",
    department: "Gironde (33)",
    distance: "~35 min de Coutras",
    intro:
      "À Branne et sur l’axe Libourne–Bordeaux, nous intervenons pour la pose, l’entretien et le nettoyage de toiture, ainsi que les travaux extérieurs.",
    highlights: [
      "Pose de toiture à Branne",
      "Entretien et nettoyage",
      "Taille de haies",
    ],
    seoTitle: "Couvreur à Branne",
    seoDescription:
      "Couvreur à Branne : pose et entretien de toiture. Zone couverte depuis Coutras vers Bordeaux.",
  },
  {
    slug: "creon",
    name: "Créon",
    department: "Gironde (33)",
    distance: "~50 min de Coutras",
    intro:
      "Sur Créon et l’Entre-deux-Mers, Couvreur BDX propose pose de toiture, entretien, nettoyage et terrassement. Dans notre rayon d’environ 100 km.",
    highlights: [
      "Pose et rénovation de toiture à Créon",
      "Nettoyage de toiture",
      "Terrassement",
    ],
    seoTitle: "Couvreur à Créon",
    seoDescription:
      "Couvreur à Créon : pose, entretien et nettoyage de toiture. Artisan depuis Coutras, Entre-deux-Mers.",
  },
  {
    slug: "pineuilh",
    name: "Pineuilh",
    department: "Gironde (33)",
    distance: "~30 min de Coutras",
    intro:
      "À Pineuilh et dans le secteur de Sainte-Foy, Couvreur BDX propose pose de toiture, entretien, nettoyage et terrassement.",
    highlights: [
      "Pose de toiture à Pineuilh",
      "Entretien et nettoyage",
      "Terrassement",
    ],
    seoTitle: "Couvreur à Pineuilh",
    seoDescription:
      "Couvreur à Pineuilh : pose et entretien de toiture. Zone d’intervention depuis Coutras.",
  },
  {
    slug: "sainte-foy-la-grande",
    name: "Sainte-Foy-la-Grande",
    department: "Gironde (33)",
    distance: "~30 min de Coutras",
    intro:
      "Sainte-Foy-la-Grande fait partie de notre périmètre. Pose, entretien, nettoyage de toiture et dépannage pour le centre et les communes proches.",
    highlights: [
      "Pose et entretien de toiture",
      "Nettoyage de toiture",
      "Dépannage fuite",
    ],
    seoTitle: "Couvreur Sainte-Foy-la-Grande",
    seoDescription:
      "Couvreur à Sainte-Foy-la-Grande : pose, entretien et nettoyage de toiture. Artisan du secteur Coutras.",
  },
  {
    slug: "castillon-la-bataille",
    name: "Castillon-la-Bataille",
    department: "Gironde (33)",
    distance: "~35 min de Coutras",
    intro:
      "À Castillon-la-Bataille, nous intervenons pour vos projets de toiture, nettoyage et terrassement. Devis détaillé avant travaux.",
    highlights: [
      "Pose et entretien de toiture",
      "Nettoyage de toiture",
      "Terrassement",
    ],
    seoTitle: "Couvreur Castillon-la-Bataille",
    seoDescription:
      "Couvreur à Castillon-la-Bataille : travaux de toiture et terrassement depuis Coutras.",
  },
  {
    slug: "fronsac",
    name: "Fronsac",
    department: "Gironde (33)",
    distance: "~25 min de Coutras",
    intro:
      "Sur Fronsac et le vignoble voisin, nous réalisons pose de toiture, entretien, nettoyage et travaux extérieurs pour habitations et dépendances.",
    highlights: [
      "Pose de toiture",
      "Entretien et nettoyage",
      "Taille de haies",
    ],
    seoTitle: "Couvreur à Fronsac",
    seoDescription:
      "Couvreur à Fronsac : pose, entretien et nettoyage de toiture. Zone couverte depuis Coutras.",
  },
  {
    slug: "saint-emilion",
    name: "Saint-Émilion",
    department: "Gironde (33)",
    distance: "~30 min de Coutras",
    intro:
      "À Saint-Émilion et alentours, Couvreur BDX intervient sur les toitures, y compris les bâtiments plus anciens. Devis clair, finitions soignées.",
    highlights: [
      "Pose et rénovation de toiture",
      "Entretien préventif",
      "Nettoyage de toiture",
    ],
    seoTitle: "Couvreur à Saint-Émilion",
    seoDescription:
      "Couvreur à Saint-Émilion : pose et entretien de toiture par un artisan basé près de Coutras.",
  },
];

export function getZone(slug: string): Zone | undefined {
  return zones.find((zone) => zone.slug === slug);
}
