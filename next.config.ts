import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
