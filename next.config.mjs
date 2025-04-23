/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/uni_bure" : "",
  basePath: process.env.NODE_ENV === "production" ? "/uni_bure" : "",
};

export default nextConfig;
