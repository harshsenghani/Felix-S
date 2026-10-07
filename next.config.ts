import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    unoptimized: true,
    qualities: [75, 90, 100],
  },
};

export default nextConfig;



