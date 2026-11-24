import type { Metadata } from "next";
import { faqItems } from "@/content/faq";
import { services } from "@/content/services";
import { zones } from "@/content/zones";
import { site } from "@/lib/site";

const defaultTitle = `Couvreur Coutras, Bordeaux, Bergerac | ${site.name}`;

export function siteHost() {
  return new URL(site.url).host;
}

export function absoluteUrl(path = "") {
  if (!path || path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
  noIndex = false,
  ogImage = "/opengraph-image",
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : defaultTitle;
  const desc = description ?? site.description;
  const url = absoluteUrl(path);
  const canonical = path || "/";

  return {
    title: { absolute: fullTitle },
    description: desc,
    metadataBase: new URL(site.url),
    applicationName: site.name,
    authors: [{ name: site.director, url: site.url }],
    creator: site.legalName,
    publisher: site.name,
    category: "Local Business",
    keywords: keywords?.length
      ? keywords
      : [
          "couvreur Coutras",
          "couvreur Bordeaux",
          "couvreur Bergerac",
          "couvreur Chamadelle",
          "pose de toiture Coutras",
          "entretien toiture Bordeaux",
          "nettoyage toiture Bergerac",
          "démoussage toiture Libourne",
          "taille de haies Coutras",
          "terrassement Coutras",
          "couvreur Libourne",
          "couvreur Gironde",
          "couvreur Dordogne",
          site.shortName,
        ],
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${site.name} : couvreur Coutras, Bordeaux, Bergerac`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "FR-33",
      "geo.placename": `${site.city}, Coutras, Bordeaux`,
      "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
      ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
    },
  };
}

const dayMap = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: [site.shortName, site.legalName],
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    image: absoluteUrl("/opengraph-image"),
    logo: absoluteUrl("/icon.svg"),
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    taxID: site.siren.replace(/\s/g, ""),
    foundingDate: site.foundedDate,
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: site.geo.latitude,
          longitude: site.geo.longitude,
        },
        geoRadius: "100000",
      },
      ...zones.map((zone) => ({
        "@type": "City",
        name: zone.name,
      })),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressRegion: site.department,
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: dayMap.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "00:00",
      closes: "23:59",
    })),
    founder: {
      "@type": "Person",
      name: site.director,
    },
    sameAs: ["https://www.allovoisins.com/p/jorisloubere"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations Couvreur BDX",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          url: absoluteUrl(`/services/${service.slug}`),
          provider: { "@id": `${site.url}/#business` },
          areaServed: site.areaServed,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "fr-FR",
    publisher: { "@id": `${site.url}/#business` },
  };
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(service: {
  title: string;
  summary: string;
  intro: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.intro,
    image: absoluteUrl(service.image),
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": `${site.url}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.areaServed,
    },
    serviceType: service.title,
  };
}
