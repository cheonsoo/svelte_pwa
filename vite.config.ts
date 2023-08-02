import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      useCredentials: true,
      includeAssets: ['favicon.ico', 'favicon.svg','robots.txt','apple-touch-icon.png'],
      manifest: {
        name: 'whatToEatToday',
        short_name: 'wtet',
        description: 'what to eat today',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'whatToEatToday-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'whatToEatToday-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'whatToEatToday-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    })
  ],
})
