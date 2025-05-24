/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2592000, // 30 days in seconds
  },
  async redirects() {
    return [
      {
        source: '/austin-magician',
        destination: '/cities/austin-magician',
        permanent: true,
      },
      {
        source: '/dallas-magician',
        destination: '/cities/dallas-magician',
        permanent: true,
      },
      {
        source: '/houston-magician',
        destination: '/cities/houston-magician',
        permanent: true,
      },
      {
        source: '/san-antonio-magician',
        destination: '/cities/san-antonio-magician',
        permanent: true,
      },
      {
        source: '/phoenix-magician',
        destination: '/cities/phoenix-magician',
        permanent: true,
      },
      {
        source: '/orlando-magician',
        destination: '/cities/orlando-magician',
        permanent: true,
      },
      {
        source: '/texas/dallas',
        destination: '/cities/dallas-magician',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 