/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['files.edgestore.dev','img.youtube.com', 'dropbox.com'],
        //unoptimized: true,
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      },
};

export default nextConfig;
