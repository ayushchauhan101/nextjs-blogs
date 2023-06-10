/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'my-value-from-env',
    mongoPassword: process.env.NEXT_PUBLIC_API_KEY
  }
}

module.exports = nextConfig
