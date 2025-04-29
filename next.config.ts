import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static exports
  distDir: 'out',    // Output directory for the static build
  images: {
    unoptimized: true, // For static export, images need to be unoptimized
  },
  // Required for GitHub Pages deployment with repository name in the URL path
  basePath: process.env.NODE_ENV === 'production' ? '/devopslab_todo_app' : '',
};

export default nextConfig;
