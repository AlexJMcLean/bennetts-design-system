/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    scrollRestoration: true,
    // this includes files from the monorepo base one directory up
    outputFileTracingRoot: path.join(__dirname, "../"),
  },
};

module.exports = nextConfig;
