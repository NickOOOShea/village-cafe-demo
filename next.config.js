/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [],
  },
  trailingSlash: true,
}

module.exports = nextConfig
