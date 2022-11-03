/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'vi', 'zho', 'chi'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  images: { 
    domains: ['avatars.githubusercontent.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
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
