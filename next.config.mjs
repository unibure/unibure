/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    BASE_PATH: process.env.NODE_ENV === "production" ? "/uni_bure" : "",
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/uni_bure" : "",
  basePath: process.env.NODE_ENV === "production" ? "/uni_bure" : "",
};

export default nextConfig;
