import type { Metadata } from "next";
import { site } from "@/lib/site";

const defaultTitle = `Couvreur à Coutras et Libournais | ${site.name}`;

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle = title ? `${title} | ${site.name}` : defaultTitle;
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(site.url),
    alternates: { canonical: path || "/" },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    taxID: site.siren.replace(/\s/g, ""),
    vatID: site.siret.replace(/\s/g, ""),
    areaServed: {
      "@type": "AdministrativeArea",
      name: site.areaServed,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressRegion: site.department,
      addressCountry: "FR",
    },
    foundingDate: site.foundedDate,
    founder: {
      "@type": "Person",
      name: site.director,
    },
    priceRange: "€€",
  };
}
