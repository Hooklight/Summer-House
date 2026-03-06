import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { conditions } from "@/lib/conditions";
import { locations, services } from "@/lib/content";
import { getAllPeptidePages } from "@/lib/peptide-pages";
import { personas } from "@/lib/personas";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/services", "/locations", "/conditions", "/peptide-therapy", "/about", "/contact", "/blog", "/privacy", "/terms"].map(
    (path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const serviceRoutes = services.map((service) => ({
    url: absoluteUrl(`/services/${service.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationRoutes = locations.map((location) => ({
    url: absoluteUrl(`/locations/${location.slug}`),
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const personaRoutes = personas.map((persona) => ({
    url: absoluteUrl(`/for/${persona.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const conditionRoutes = conditions.map((condition) => ({
    url: absoluteUrl(`/conditions/${condition.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const peptideRoutes = getAllPeptidePages().map((page) => ({
    url: absoluteUrl(`/peptide-therapy/${page.slug}`),
    lastModified: new Date("2026-03-05"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes, ...personaRoutes, ...conditionRoutes, ...peptideRoutes];
}
