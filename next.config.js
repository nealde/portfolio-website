// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true, swcMinify: true }

module.exports = withContentlayer(nextConfig)
