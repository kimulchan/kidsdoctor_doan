/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/robots.txt",
  //       destination: "/api/robots",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
