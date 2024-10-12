import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

export default defineConfig(() => {
  return {
    base: '',
    server: {
      port: 3000,
    },
    preview: {
      open: true,
      port: 3000,
    },
    build: {
      outDir: 'build',
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
      eslint(),
      svgr({
        include: ['src/**/*.svg'],
      }),
    ],
  }
})
