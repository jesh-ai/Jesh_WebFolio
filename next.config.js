/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Jesh_WebFolio',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
};

module.exports = nextConfig;