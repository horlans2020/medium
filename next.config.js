const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hearty-seahorse-633.convex.cloud',
          pathname: '/api/storage/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  