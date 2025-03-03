import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'
import * as path from 'node:path'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(() => {
  return {
    base: '/',
    server: {
      port: 3000,
    },
    preview: {
      open: true,
      port: 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    plugins: [
      react(),
      tsconfigPaths(),
      eslint(),
      svgr({
        include: ['src/**/*.svg'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})
