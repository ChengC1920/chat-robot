/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // 如果您要部署到GitHub Pages上的子目录，请取消注释并修改以下行
  // basePath: '/deepseek-chat',
  // assetPrefix: '/deepseek-chat',
}

module.exports = nextConfig 