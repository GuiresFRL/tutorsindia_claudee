import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/order-now/",
          "/customer-centre/",
          "/api/",
        ],
      },
    ],
    sitemap: "https://www.tutorsindia.com/sitemap.xml",
    host: "https://www.tutorsindia.com",
  };
}
