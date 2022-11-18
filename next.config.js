/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/naver8ac868d8da74002d5f2ac6df2e6a250e.html",
      },
    ];
  },
};

module.exports = nextConfig;
