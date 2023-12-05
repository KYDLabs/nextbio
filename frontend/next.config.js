/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kydlabs.imgix.net",
      },
      {
        protocol: "https",
        hostname: "content.kydlabs.com",
      },
    ],
  },
  experimental: {
    externalDir: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/bio",
        permanent: true,
      },
    ];
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
