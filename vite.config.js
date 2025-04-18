import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['path', 'fs', 'source-map-js', 'url'], // Exclui pacotes do Node.js
  },
  build: {
    rollupOptions: {
      external: ['path', 'fs', 'source-map-js', 'url'], // Ignora pacotes que não podem ser usados no navegador
    },
  },
})
