/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  basePath: "/uni_bure.github.io",
};

export default nextConfig;
