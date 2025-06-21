import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't support image optimization
  },
  basePath: '/future-med-website', // Replace with your repo name
  trailingSlash: true, // Helps with proper routing on GitHub Pages
};

export default nextConfig;
