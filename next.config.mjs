/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static exports
    images: {
      unoptimized: true // Disable image optimization for static export
    }
};

export default nextConfig;