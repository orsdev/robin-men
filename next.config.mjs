/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/analytics',
        permanent: false
      }
    ];
  },
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: '**.unsplash.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
