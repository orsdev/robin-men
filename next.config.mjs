/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  env: {
    BASE_ENDPOINT: process.env.BASE_ENDPOINT
  }
};

export default nextConfig;
