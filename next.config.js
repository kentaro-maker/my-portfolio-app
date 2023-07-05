/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: false
}
const withMDX = require('@next/mdx')()

module.exports = withMDX(nextConfig)
