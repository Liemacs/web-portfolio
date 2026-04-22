import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const publicDir = fileURLToPath(new URL('./public', import.meta.url))

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ro',
      },
      meta: [
        {
          name: 'theme-color',
          content: '#f7f7f7',
        },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/main.css'],
  devtools: {
    enabled: false,
  },
  experimental: {
    serverAppConfig: false,
  },
  dir: {
    public: publicDir,
  },
  nitro: {
    publicAssets: [
      {
        baseURL: '/',
        dir: publicDir,
      },
    ],
  },
  srcDir: 'src/',
  vite: {
    plugins: [tailwindcss()],
  },
})
