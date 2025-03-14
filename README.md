# DeepSeek AI 聊天机器人

一个简洁高级的 AI 聊天机器人，使用 Next.js 和 React 构建，集成 DeepSeek API，采用黑白灰色调设计。

![DeepSeek AI 聊天机器人](https://i.imgur.com/example.png)

## 功能特点

- 现代简约的黑白灰色调界面
- 响应式设计，适配各种设备
- 支持 Markdown 格式的消息显示
- 集成 DeepSeek AI API
- 自动调整输入框高度
- 优雅的加载动画

## 在线体验

访问 [https://your-username.github.io/deepseek-chat](https://your-username.github.io/deepseek-chat) 体验在线版本

## 本地开发

### 前提条件

- Node.js 14.x 或更高版本
- npm 或 yarn
- DeepSeek API 密钥

### 安装步骤

1. 克隆仓库

```bash
git clone https://github.com/your-username/deepseek-chat.git
cd deepseek-chat
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 创建环境变量文件
   创建 `.env.local` 文件并添加您的 DeepSeek API 密钥：

```
NEXT_PUBLIC_DEEPSEEK_API_KEY=your-api-key
```

4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

5. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 部署

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fdeepseek-chat)

1. 点击上方按钮
2. 按照 Vercel 的指示完成部署
3. 在 Vercel 项目设置中添加环境变量 `NEXT_PUBLIC_DEEPSEEK_API_KEY`

### 部署到 GitHub Pages

1. 在 package.json 中添加以下脚本：

```json
"scripts": {
  "build": "next build",
  "export": "next export",
  "deploy": "next build && next export && touch out/.nojekyll && gh-pages -d out"
}
```

2. 安装 gh-pages 包：

```bash
npm install --save-dev gh-pages
```

3. 部署到 GitHub Pages：

```bash
npm run deploy
```

## 自定义

- 修改 `tailwind.config.js` 以自定义颜色和主题
- 在 `src/app/globals.css` 中添加自定义样式
- 修改 `src/components/Header.tsx` 以自定义导航和菜单

## 技术栈

- [Next.js](https://nextjs.org/) - React 框架
- [React](https://reactjs.org/) - 用户界面库
- [Tailwind CSS](https://tailwindcss.com/) - 样式
- [TypeScript](https://www.typescriptlang.org/) - 类型安全
- [DeepSeek API](https://platform.deepseek.com/) - AI 服务

## 许可证

MIT
