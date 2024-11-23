export default {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        pathname: '/s/files/**'
      },
      {
        protocol: 'http', // Add your backend protocol
        hostname: '127.0.0.1', // Add your backend hostname
        port: '8000', // Specify the backend port
        pathname: '/media/images/**' // Match the path for your media files
      }
    ]
  }
};
