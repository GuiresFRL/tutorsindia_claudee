import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
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
      // Blog images from guires.info — proxied to avoid hotlink protection
      {
        source: "/blog/wp-content/:path*",
        destination: "https://guires.info/blog/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;
