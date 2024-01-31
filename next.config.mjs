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
  }
};

export default nextConfig;
