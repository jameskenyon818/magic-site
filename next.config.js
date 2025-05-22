/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ]
  },
}

module.exports = nextConfig 