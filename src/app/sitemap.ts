import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { zones } from "@/content/zones";
import { absoluteUrl } from "@/lib/seo";

const lastModified = new Date("2026-11-24");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/services"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/contact"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/mentions-legales"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: service.featured ? 0.85 : 0.75,
    images: [absoluteUrl(service.image)],
  }));

  const zoneRoutes: MetadataRoute.Sitemap = zones.map((zone) => ({
    url: absoluteUrl(`/zones/${zone.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority:
      zone.slug === "coutras" ||
      zone.slug === "bordeaux" ||
      zone.slug === "bergerac" ||
      zone.slug === "libourne"
        ? 0.9
        : 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...zoneRoutes];
}
