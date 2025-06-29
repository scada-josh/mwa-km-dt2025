import type { NextConfig } from "next";

const basePath = process.env.BASE_PATH || '';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '/app2',
  // assetPrefix: '/app2',
  // trailingSlash: true,
  basePath,
  assetPrefix: isProd ? `${basePath}/` : '',
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'profile.line-scdn.net',
      },
    ],
  },

};

export default nextConfig;
