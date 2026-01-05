module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    quality: 75,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache for 1 year (static assets)
    unoptimized: false,
  },
  async redirects() {
    return [
      {
        source: '/myarticle/:path*',
        destination: 'https://substack.com/@markphammm',
        permanent: true,
      },
    ]
  },
}
