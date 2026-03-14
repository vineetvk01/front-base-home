/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Configure image handling
  images: {
    unoptimized: true, // Disable image optimization for now to avoid loader issues
    domains: [],
  },
  
  // Webpack configuration to handle image files
  webpack: (config, { isServer }) => {
    // Add file loader for images
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });
    
    return config;
  },
};

module.exports = nextConfig;
