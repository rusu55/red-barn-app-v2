/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['files.edgestore.dev','img.youtube.com', 'dropbox.com'],
        unoptimized: true,
      },
};

export default nextConfig;
