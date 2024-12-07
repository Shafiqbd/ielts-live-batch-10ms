import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.10minuteschool.com",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "cdn.10ms.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
