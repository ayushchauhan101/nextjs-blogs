/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey : 'my-value-from-env',
    mongoPassword : 'new_mongoDB'
  }
}

module.exports = nextConfig
