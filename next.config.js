/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'vi', 'zho', 'chi'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
}

module.exports = nextConfig;

// module.exports = {
//   reactStrictMode: true,

//   // typescript: {
//   //   ignoreBuildErrors: true,
//   // }
// }
