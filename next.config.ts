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
  // Force all URLs to use trailing slash
  trailingSlash: true,

  // Reduce unused JS — target modern browsers only
  experimental: {
    optimizePackageImports: ["pdf-lib", "nodemailer"],
  },

  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error"] }
        : false,
  },

  async redirects() {
    return [
      {
        source: "/title/title-:slug",
        destination: "/title/:slug/",
        permanent: true,
      },

      {
        source: "/freelance",
        destination: "https://workfoster.com/",
        permanent: true,
      },

      {
        source: "/freelance/academic-writer",
        destination: "https://workfoster.com/",
        permanent: true,
      },

      { source: "/academy/assignment-writing", destination: "/academy/", permanent: true },
      { source: "/academy/business-management-info", destination: "/academy/", permanent: true },
      { source: "/academy/coding-algorithms-development", destination: "/academy/", permanent: true },
      { source: "/academy/defenitions", destination: "/academy/", permanent: true },
      { source: "/academy/engineering-and-technology", destination: "/academy/", permanent: true },
      { source: "/academy/engineering-technology-ebooks", destination: "/academy/", permanent: true },
      { source: "/academy/future-topics", destination: "/academy/", permanent: true },
      { source: "/academy/future-topics-titles", destination: "/academy/", permanent: true },
      { source: "/academy/how-to-article", destination: "/academy/", permanent: true },
      { source: "/academy/infographics", destination: "/academy/", permanent: true },
      { source: "/academy/manuscript-writing", destination: "/academy/", permanent: true },
      { source: "/academy/phd-dissertation", destination: "/academy/", permanent: true },
      { source: "/academy/recent-trends-2", destination: "/academy/", permanent: true },
      { source: "/academy/research-methodology", destination: "/academy/", permanent: true },
      { source: "/academy/research-papers", destination: "/academy/", permanent: true },
      { source: "/academy/theories", destination: "/academy/", permanent: true },

      {
        source: "/ask-an-expert/political-science",
        destination: "/ask-an-expert/management/political-science/",
        permanent: true,
      },

      {
        source: "/our-services/development-2/illustration-and-redrawing",
        destination: "/our-services/development/",
        permanent: true,
      },

      {
        source: "/our-services/development-2/pilot-study-analysis",
        destination: "/our-services/development/",
        permanent: true,
      },

      {
        source: "/our-services/development-2/text-or-data-analysis",
        destination: "/our-services/development/",
        permanent: true,
      },

      {
        source:
          "/our-services/masters-dissertation-writing-services/qualitative-data-analysis",
        destination:
          "/our-services/masters-dissertation-writing-services/dissertation-statistical-analysis/",
        permanent: true,
      },

      {
        source:
          "/our-services/phd-dba-dissertation/full-dissertation-2",
        destination:
          "/our-services/phd-dba-dissertation/phd-full-dissertation/",
        permanent: true,
      },

      {
        source:
          "/our-services/phd-dba-dissertation/power-point-presentation",
        destination:
          "/our-services/phd-dba-dissertation/phd-presentation/",
        permanent: true,
      },

      {
        source:
          "/our-services/phd-dba-dissertation/quantitative-data-analysis",
        destination:
          "/our-services/phd-dba-dissertation/",
        permanent: true,
      },

      {
        source: "/academy/research-concepts",
        destination: "/academy/",
        permanent: true,
      },

      {
        source: "/academy/resources",
        destination: "/academy/",
        permanent: true,
      },

      {
        source: "/academy/University",
        destination: "/academy/",
        permanent: true,
      },

      {
        source:
          "/library/essay-index/management-essays/application-of-theory-of-iinternational-business-a-case-study-of-mcdonald",
        destination:
          "/library/essay-index/management-essays/",
        permanent: true,
      },

      {
        source:
          "/help-guide/study-guides-how-to-write-a-dissertation-methodology",
        destination:
          "/help-guide/study-guides/",
        permanent: true,
      },

      {
        source:
          "/help-guide/study-guides/guide-for-writing-medical-assignments",
        destination:
          "/help-guide/study-guides/",
        permanent: true,
      },

      {
        source: "/our-services/data-collection",
        destination: "/our-services/",
        permanent: true,
      },

      {
        source:
          "/subjects/humanities-assignment-writing-services",
        destination:
          "/subjects/arts-humanities-academic-writing-help/",
        permanent: true,
      },

      {
        source:
          "/our-services/coursework-writing/case-study",
        destination:
          "/our-services/coursework-writing/",
        permanent: true,
      },

      {
        source:
          "/our-services/coursework-writing/business-plan",
        destination:
          "/our-services/coursework-writing/",
        permanent: true,
      },

      {
        source:
          "/our-services/masters-dissertation-writing-services-/dissertation-proposal-",
        destination:
          "/our-services/masters-dissertation-writing-services/dissertation-proposal/",
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
      {
        source: "/wp-content/:path*",
        destination:
          "https://www.tutorsindia.net/wp-content/:path*",
      },

      {
        source: "/blog/wp-content/:path*",
        destination:
          "https://tutorsindia.net/blog/wp-content/:path*",
      },

      {
        source: "/academy/wp-content/:path*",
        destination:
          "https://tutorsindia.net/academy/wp-content/:path*",
      },
    ];
  },
};

export default nextConfig;
