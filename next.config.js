/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'simplifiedcomputerscience.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
