/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  transpilePackages: [
    '@repo/components',
    '@repo/utils',
    '@next/eslint-plugin-next',
    '@repo/eslint-config',
    '@repo/tailwind-config',
    '@repo/types',
    '@repo/config-typescript'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
