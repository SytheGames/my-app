import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/web-design",
        destination: "/web-design",
        permanent: true,
      },
      {
        source: "/services/local-seo",
        destination: "/local-seo",
        permanent: true,
      },
      {
        source: "/hvac-web-design",
        destination: "/industries/hvac",
        permanent: true,
      },
      {
        source: "/careers/appointment-setter-sales-representative",
        destination: "/careers/remote-appointment-setter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
