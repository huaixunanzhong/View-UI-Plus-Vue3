import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue', // 自动导入 Vue 的 API
      ],
      dts: 'src/auto-imports.d.ts', // 生成 TypeScript 声明文件路径
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // 相对路径别名配置，使用 @ 代替 src
    },
  },
})
