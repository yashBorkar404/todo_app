import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: 'export',  // Enables static exports
  basePath: isProd ? '/todo_app' : '',
  assetPrefix: isProd ? '/todo_app/' : '',
  images: { unoptimized: true }, // if you use next/image
};

export default nextConfig;
