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
  }
  // output: 'export'
};

export default nextConfig;
