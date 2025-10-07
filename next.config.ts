import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'downloads.intercomcdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.apollo.io',
        port: '',
        pathname: '/**',
      },
    ],

  },

};

export default nextConfig;
