/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'vi', 'zho', 'chi'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: { 
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  }
}

module.exports = nextConfig;

// module.exports = {
//   reactStrictMode: true,

//   // typescript: {
//   //   ignoreBuildErrors: true,
//   // }
// }
