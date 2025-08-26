import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Sitemap from 'vite-plugin-sitemap' // 👈 default export

export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    Sitemap({
      hostname: 'https://www.resaad.com',
      // لو لسه ما عندكش توليد تلقائي للروتس، اكتب الأساسيين مؤقتًا:
     routes: ['/', '/about', '/services', '/contact'],

    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
