/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Jesh_WebFolio',
  reactStrictMode: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
