import type { MetadataRoute } from "next";

const SITE = "https://translite.guoziyang.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE}`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE}/features`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE}/download`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/docs`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
