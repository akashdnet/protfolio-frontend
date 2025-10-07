import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['picsum.photos', 'images.unsplash.com', "res.cloudinary.com"],
  },
  experimental:{
    serverActions: {
      bodySizeLimit: "10mb"
    }
  }
};

export default nextConfig;
