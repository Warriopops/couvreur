export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  intro: string;
  points: string[];
  seoTitle: string;
  seoDescription: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "pose-toiture",
    title: "Pose de toiture et couverture",
    shortTitle: "Pose de toiture",
    summary:
      "Pose et couverture de toiture en neuf comme en rénovation, de Coutras jusqu’à Bordeaux et Bergerac.",
    intro:
      "Artisan depuis 15 ans. Pose de toiture et couverture en tuiles ou ardoises, faîtages et finitions. Neuf ou rénovation, chantier soigné et suivi jusqu’à la fin. Garantie décennale.",
    points: [
      "Pose de couverture neuve",
      "Réfection de toiture",
      "Tuiles, ardoises et faîtages",
      "Garantie décennale",
    ],
    seoTitle: "Pose de toiture Coutras | Couvreur BDX",
    seoDescription:
      "Pose de toiture près de Coutras, Bordeaux et Bergerac : neuf et rénovation par un artisan depuis 15 ans.",
    image: "/images/service-pose-toiture.jpg",
    featured: true,
  },
  {
    slug: "entretien-toiture",
    title: "Entretien de toiture",
    shortTitle: "Entretien de toiture",
    summary:
      "Contrôle, petites réparations et entretien régulier pour prolonger la durée de vie de votre toit.",
    intro:
      "On contrôle l’état de votre couverture, on remplace les éléments abîmés et on vous dit quand revenir. Simple, régulier, adapté au climat du Libournais.",
    points: [
      "Contrôle de couverture",
      "Remplacement de tuiles ponctuel",
      "Vérification des points sensibles",
      "Conseils d’entretien",
    ],
    seoTitle: "Entretien de toiture Coutras | Couvreur BDX",
    seoDescription:
      "Entretien de toiture à Coutras et environs : contrôle, petites réparations et suivi par un artisan local.",
    image: "/images/service-entretien-toiture.jpg",
    featured: true,
  },
  {
    slug: "nettoyage-toiture",
    title: "Nettoyage de toiture",
    shortTitle: "Nettoyage de toiture",
    summary:
      "Nettoyage, démoussage et traitement pour une toiture propre et plus durable.",
    intro:
      "Mousses et salissures abîment les tuiles. On nettoie la toiture et on applique un traitement adapté pour la faire durer.",
    points: [
      "Nettoyage de toiture",
      "Démoussage",
      "Traitement antimousse",
      "Contrôle après intervention",
    ],
    seoTitle: "Nettoyage de toiture Coutras | Couvreur BDX",
    seoDescription:
      "Nettoyage et démoussage de toiture autour de Coutras : intervention soignée par Couvreur BDX.",
    image: "/images/service-nettoyage-toiture.jpg",
    featured: true,
  },
  {
    slug: "taille-haies",
    title: "Taille de haies et arbustes",
    shortTitle: "Taille de haies",
    summary:
      "Taille de haies, arbustes et entretien végétal autour de votre maison.",
    intro:
      "On fait aussi la taille de haies et d’arbustes. Intervention locale autour de Coutras, jusqu’à Bordeaux et Bergerac.",
    points: [
      "Taille de haies",
      "Taille d’arbustes",
      "Entretien végétal",
      "Intervention de proximité",
    ],
    seoTitle: "Taille de haies Coutras | Couvreur BDX",
    seoDescription:
      "Taille de haies et arbustes près de Coutras : entretien extérieur par un artisan local.",
    image: "/images/service-taille-haies.jpg",
    featured: true,
  },
  {
    slug: "terrassement",
    title: "Terrassement",
    shortTitle: "Terrassement",
    summary:
      "Travaux de terrassement pour préparer, niveler ou aménager votre terrain.",
    intro:
      "Préparation de terrain, nivellement, aménagement. Travail soigné, suivi du début jusqu’à la fin.",
    points: [
      "Préparation de terrain",
      "Nivellement",
      "Aménagement extérieur",
      "Suivi de chantier",
    ],
    seoTitle: "Terrassement Coutras | Couvreur BDX",
    seoDescription:
      "Terrassement autour de Coutras : préparation et nivellement de terrain par Couvreur BDX.",
    image: "/images/service-terrassement.jpg",
    featured: true,
  },
  {
    slug: "fuite-toiture",
    title: "Réparation et fuite de toiture",
    shortTitle: "Réparation toiture",
    summary:
      "Recherche de fuite et dépannage après intempéries. Nous répondons à vos demandes.",
    intro:
      "Tuiles cassées, infiltration, dégât après orage : on localise le problème, on sécurise et on répare. Urgent ou planifié, on vous répond.",
    points: [
      "Recherche de fuite",
      "Réparation d’urgence",
      "Remplacement localisé",
      "Devis clair pour la suite",
    ],
    seoTitle: "Fuite toiture Coutras | Couvreur BDX",
    seoDescription:
      "Réparation et fuite de toiture à Coutras : dépannage rapide par un artisan local.",
    image: "/images/service-fuite.jpg",
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
