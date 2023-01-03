/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.fsgn13-2.fna.fbcdn.net', 'cdn.sanity.io']
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
