export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  place: string;
  category: string;
  description: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/service-pose-toiture.jpg",
    alt: "Pose de tuiles en cours sur liteaux",
    title: "Pose de toiture",
    place: "Libournais",
    category: "Couverture",
    description: "Pose de tuiles neuves sur liteaux et écran sous-toiture.",
  },
  {
    src: "/images/gallery-renovation.jpg",
    alt: "Rénovation de toiture vue depuis le toit",
    title: "Rénovation de couverture",
    place: "Libournais",
    category: "Rénovation",
    description: "Réfection de toiture en tuiles canal sur bâti traditionnel.",
  },
  {
    src: "/images/service-nettoyage-toiture.jpg",
    alt: "Toiture en tuiles nettoyée",
    title: "Toiture après entretien",
    place: "Coutras",
    category: "Entretien",
    description: "Couverture propre et faîtages repris après intervention.",
  },
  {
    src: "/images/service-fuite.jpg",
    alt: "Fenêtre de toit intégrée dans une couverture neuve",
    title: "Intégration fenêtre de toit",
    place: "Libourne",
    category: "Couverture",
    description: "Pose de couverture avec fenêtre de toit et abergements soignés.",
  },
  {
    src: "/images/gallery-couverture.jpg",
    alt: "Toiture mixte tuiles et bac acier",
    title: "Couverture mixte",
    place: "Libournais",
    category: "Couverture",
    description: "Jonction tuiles canal et couverture métallique, abergements zinc.",
  },
  {
    src: "/images/gallery-charpente.jpg",
    alt: "Charpente et liteaux avant pose de couverture",
    title: "Préparation de couverture",
    place: "Chamadelle",
    category: "Pose",
    description: "Mise en place des liteaux avant pose des tuiles.",
  },
  {
    src: "/images/service-entretien-toiture.jpg",
    alt: "Toiture avec lucarne après travaux",
    title: "Entretien et finitions",
    place: "Libournais",
    category: "Entretien",
    description: "Toiture entretenue avec lucarne et souche de cheminée.",
  },
  {
    src: "/images/hero-toiture.jpg",
    alt: "Toiture en tuiles canal avec gouttière",
    title: "Couverture terminée",
    place: "Libournais",
    category: "Couverture",
    description: "Toiture en tuiles canal, gouttière et finitions de rive.",
  },
];
