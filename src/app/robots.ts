import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://translite.guoziyang.com/sitemap.xml",
    host: "https://translite.guoziyang.com",
  };
}
