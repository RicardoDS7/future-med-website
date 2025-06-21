import type { NextConfig } from "next";

// Define your GitHub repo name here
const repoName = "future-med-website";

// Check if we’re in production (e.g., deployed on GitHub Pages)
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true,
};

export default nextConfig;
