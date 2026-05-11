import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
     VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Eco Bazar',
        short_name: 'EcoBazar',
        description: 'Modern Grocery E-commerce Web App',
        theme_color: '#22c55e',
        background_color: '#ffffff',
        display: 'standalone',

        icons: [
          {
            src: '/logo.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
