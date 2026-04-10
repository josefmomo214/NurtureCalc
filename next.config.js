/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/calorie-needs',
        destination: '/breastfeeding-calories/',
        permanent: true,
      },
      {
        source: '/baby-weight',
        destination: '/baby-weight-percentile/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
// Force build and cleanup verification
// Force build and cleanup verification
