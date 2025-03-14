/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // 始终使用basePath和assetPrefix，确保GitHub Pages正确加载
  basePath: '/chat-robot',
  assetPrefix: '/chat-robot',
  output: 'export',
  // 移除headers配置，因为它在静态导出中不起作用
}

module.exports = nextConfig 