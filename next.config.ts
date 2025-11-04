/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.ctfassets.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'downloads.intercomcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apollo.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;