# M7S

## 本地开发

```bash
npm i -g pnpm
pnpm i
pnpm dev --filter "m7s-website"
```

## 构建部署

> 步骤：

1. 执行 pnpm build --filter "m7s-website" 会将m7s-website的构建包拷贝到m7s-shell项目中的public目录下
2. 提交代码
3. 触发vercel，自动构建部署
