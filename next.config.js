// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bhub.satpay.ir'
      },
      {
        protocol: 'http',
        hostname: '192.168.80.61'
      },
      {
        protocol: 'http',
        hostname: '192.168.80.88'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard/applications/list',
        permanent: true
      },
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true
      },
      {
        source: '/dashboard',
        destination: '/dashboard/applications/list',
        permanent: true
      },
      {
        source: '/dashboard/:path',
        destination: '/dashboard/:path/list',
        permanent: true
      }
    ];
  },
  output: 'standalone'
};

module.exports = nextConfig;
