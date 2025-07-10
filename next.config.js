/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 플랫폼별 설정 분기
  ...(process.env.GITHUB_PAGES === 'true' && {
    // GitHub Pages 전용 설정
    assetPrefix: '/unibure',
    basePath: '/unibure',
  }),
  // Vercel은 기본 설정 사용 (assetPrefix, basePath 없음)

  // 공통 설정
  distDir: 'out',

  // 환경 변수 설정
  env: {
    IS_GITHUB_PAGES: process.env.GITHUB_PAGES === 'true',
    PLATFORM: process.env.VERCEL ? 'vercel' : 'github-pages',
  },
};

export default nextConfig;
