import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves from /JustoHacker/ subdirectory
  base: '/JustoHacker/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
