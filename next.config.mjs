/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 86400,
        remotePatterns: [
          { protocol: 'https', hostname: 'api.escuelajs.co' },
          { protocol: 'https', hostname: 'i.imgur.com' },
          { protocol: 'https', hostname: 'randomuser.me' },
          { protocol: 'https', hostname: 'images.unsplash.com' },
          { protocol: 'https', hostname: 'png.pngtree.com' },
          { protocol: 'https', hostname: 'cdn.pixabay.com' },
          { protocol: 'https', hostname: 'placeimg.com' },
          { protocol: 'https', hostname: 'pravatar.cc' },
        ],
      },
};

export default nextConfig;
