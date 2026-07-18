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
      // /title/title-[slug] → /title/[slug] (duplicate URL pattern on live site).
      // No trailing slash — the site's canonical URL format dropped trailing
      // slashes, and Next normalises the incoming request before matching, so
      // a source pattern requiring a trailing slash would never match.
      {
        source: "/title/title-:slug",
        destination: "/title/:slug",
        permanent: true,
      },

      // Stale WordPress-era sitemap URLs with no equivalent page on this site —
      // redirected to the closest live replacement instead of 404ing.
      { source: "/academy/assignment-writing", destination: "/academy", permanent: true },
      { source: "/academy/business-management-info", destination: "/academy", permanent: true },
      { source: "/academy/coding-algorithms-development", destination: "/academy", permanent: true },
      { source: "/academy/defenitions", destination: "/academy", permanent: true },
      { source: "/academy/engineering-and-technology", destination: "/academy", permanent: true },
      { source: "/academy/engineering-technology-ebooks", destination: "/academy", permanent: true },
      { source: "/academy/future-topics", destination: "/academy", permanent: true },
      { source: "/academy/future-topics-titles", destination: "/academy", permanent: true },
      { source: "/academy/how-to-article", destination: "/academy", permanent: true },
      { source: "/academy/infographics", destination: "/academy", permanent: true },
      { source: "/academy/manuscript-writing", destination: "/academy", permanent: true },
      { source: "/academy/phd-dissertation", destination: "/academy", permanent: true },
      { source: "/academy/recent-trends-2", destination: "/academy", permanent: true },
      { source: "/academy/research-methodology", destination: "/academy", permanent: true },
      { source: "/academy/research-papers", destination: "/academy", permanent: true },
      { source: "/academy/theories", destination: "/academy", permanent: true },

      { source: "/ask-an-expert/political-science", destination: "/ask-an-expert/management/political-science", permanent: true },

      { source: "/our-services/development-2/illustration-and-redrawing", destination: "/our-services/development", permanent: true },
      { source: "/our-services/development-2/pilot-study-analysis", destination: "/our-services/development", permanent: true },
      { source: "/our-services/development-2/text-or-data-analysis", destination: "/our-services/development", permanent: true },

      { source: "/our-services/masters-dissertation-writing-services/qualitative-data-analysis", destination: "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis", permanent: true },

      { source: "/our-services/phd-dba-dissertation/full-dissertation-2", destination: "/our-services/phd-dba-dissertation/phd-full-dissertation", permanent: true },
      { source: "/our-services/phd-dba-dissertation/power-point-presentation", destination: "/our-services/phd-dba-dissertation/phd-presentation", permanent: true },
      { source: "/our-services/phd-dba-dissertation/quantitative-data-analysis", destination: "/our-services/phd-dba-dissertation", permanent: true },
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
      // WP media (PDFs, images) referenced by proxied content — stream from tutorsindia.net.
      // Was pointed at www.tutorsindia.com, which used to be the separate old WordPress
      // site; now that www.tutorsindia.com IS this deployment, that rewrite looped back
      // on itself (508 Loop Detected / 400 on Next Image optimization).
      {
        source: "/wp-content/:path*",
        destination: "https://www.tutorsindia.net/wp-content/:path*",
      },
      // Blog images from tutorsindia.net
      {
        source: "/blog/wp-content/:path*",
        destination: "https://tutorsindia.net/blog/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;
