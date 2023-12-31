/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com",
      "i.pinimg.com",
      "marketplace.canva.com",
      "cdn.dribbble.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
