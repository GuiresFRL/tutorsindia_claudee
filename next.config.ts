import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Reduce unused JS — target modern browsers only (drops polyfills like Array.at, Object.fromEntries etc.)
  experimental: {
    optimizePackageImports: ["pdf-lib", "nodemailer"],
  },
  compiler: {
    // Remove dead code in production
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  async redirects() {
    return [
      // /title/title-[slug]/ → /title/[slug]/ (duplicate URL pattern on live site)
      {
        source: "/title/title-:slug/",
        destination: "/title/:slug/",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // WP media (PDFs, images) referenced by proxied content — stream from the live site
      {
        source: "/wp-content/:path*",
        destination: "https://www.tutorsindia.com/wp-content/:path*",
      },
      {
        source: "/blog/wp-content/:path*",
        destination: "https://www.tutorsindia.com/blog/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;
