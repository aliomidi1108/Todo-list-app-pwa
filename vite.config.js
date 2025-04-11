import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/Todo-list-app-pwa/',
  plugins: [
    tailwindcss(),
    VitePWA({
      manifest: {
        name: 'To-Do List',
        short_name: 'ToDo',
        start_url: '/Todo-list-app-pwa/',
        scope: '/Todo-list-app-pwa/',
        display: 'standalone',
        description: 'یه اپلیکیشن To-Do List ساده و زیبا - طراحی‌شده توسط Aliomidi',
        orientation: 'portrait',
        background_color: '#1E3A8A',
        theme_color: '#7DD3FC',
        icons: [
          {
            src: 'list72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'list128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: 'list144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'list192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'list512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '540x720',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: 'screenshot2.png',
            sizes: '1280x800',
            type: 'image/png',
            form_factor: 'wide',
          },
        ],
      },
      registerType: 'autoUpdate',
    }),
  ],
});
