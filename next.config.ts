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
        source: "/services/website-redesign",
        destination: "/website-redesign",
        permanent: true,
      },
      {
        source: "/services/ecommerce-websites",
        destination: "/ecommerce-websites",
        permanent: true,
      },
      {
        source: "/services/social-media-management",
        destination: "/social-media-management",
        permanent: true,
      },
      {
        source: "/industries/hvac",
        destination: "/hvac-web-design",
        permanent: true,
      },
      {
        source: "/careers/appointment-setter-sales-representative",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/careers/remote-appointment-setter",
        destination: "/careers",
        permanent: true,
      },
      {
        source: "/blog/how-to-rank-a-local-business-website-on-google-in-2025",
        destination: "/blog/how-to-rank-a-local-business-website-on-google",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
