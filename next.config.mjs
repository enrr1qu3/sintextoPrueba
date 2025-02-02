/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sintextoproduction.blob.core.windows.net',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'sintextodevstorage.blob.core.windows.net',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: 'img.youtube.com',
            pathname: '/**',
          },
        ],
      },
};
export default nextConfig;