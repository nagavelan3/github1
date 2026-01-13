import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    unoptimized: true,
 },
 turbopack:{
  root:__dirname,
 },
 output: "export", 
 trailingSlash: true,  
};

export default nextConfig;
