/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['cdn.coinranking.com', "images.unsplash.com"]
  }
}

module.exports = nextConfig
