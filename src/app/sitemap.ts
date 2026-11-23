import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { zones } from "@/content/zones";
import { site } from "@/lib/site";

const lastModified = new Date("2026-11-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/contact", "/mentions-legales"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const zoneRoutes = zones.map((zone) => ({
    url: `${site.url}/zones/${zone.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...zoneRoutes];
}
