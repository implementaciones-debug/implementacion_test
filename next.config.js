/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
