/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [],
  },
  trailingSlash: true,
  // Disable webpack cache for Cloudflare Pages (25 MiB file size limit)
  webpack: (config, { isServer }) => {
    config.cache = false
    return config
  },
}

module.exports = nextConfig
