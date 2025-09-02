/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/nutriblue-99be9.appspot.com/images/**'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/:path*`
      }
    ];
  }
};

export default nextConfig;
