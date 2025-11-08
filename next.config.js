module.exports = {
  images: {
    quality: 100,
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
