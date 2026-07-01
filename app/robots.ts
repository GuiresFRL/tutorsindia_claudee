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
          "/marketing/",
          "/brochure/",
          "/storyboard/",
          "/infographics/",
          "/videos-and-gif/",
          "/api/",
        ],
      },
    ],
    sitemap: "https://tutorsindia.com/sitemap.xml",
    host: "https://tutorsindia.com",
  };
}
