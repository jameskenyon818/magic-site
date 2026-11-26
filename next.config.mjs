import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: 'jameskenyonmagic.com', pathname: '/images/**' },
      { protocol: 'https', hostname: 'www.jameskenyonmagic.com', pathname: '/images/**' },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroicons/react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async redirects() {
    return [
      { source: '/sitemap-0.xml', destination: '/sitemap.xml', permanent: true },
      // City page redirects
      {
        source: '/cities/:city-magician/stage-show',
        destination: '/cities/:city-magician/stage-magic',
        permanent: true,
      },
      {
        source: '/:city-magician/stage-show',
        destination: '/cities/:city-magician/stage-magic',
        permanent: true,
      },
      {
        source: '/:city-magician/close-up',
        destination: '/cities/:city-magician/close-up',
        permanent: true,
      },
      {
        source: '/:city-magician/trade-show',
        destination: '/cities/:city-magician/trade-show',
        permanent: true,
      },
      // Service page redirects
      {
        source: '/stage-show',
        destination: '/stage-magic',
        permanent: true,
      },
      {
        source: '/close-up-magic',
        destination: '/close-up',
        permanent: true,
      },
      {
        source: '/trade-show-magic',
        destination: '/trade-show',
        permanent: true,
      },
      // Additional service redirects for common variations
      {
        source: '/services/trade-show',
        destination: '/trade-show',
        permanent: true,
      },
      {
        source: '/services/corporate',
        destination: '/stage-magic',
        permanent: true,
      },
      {
        source: '/services/close-up',
        destination: '/close-up',
        permanent: true,
      },
      {
        source: '/services/stage-magic',
        destination: '/stage-magic',
        permanent: true,
      },
    ];
  }
}

export default withMDX(nextConfig) 