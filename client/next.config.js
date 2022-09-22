/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_OPENWEATHER_API,
  }
}

module.exports = nextConfig
