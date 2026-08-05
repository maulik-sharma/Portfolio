import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target modern browsers for smaller output
    target: 'es2020',
    // Split vendor bundles for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Three.js ecosystem (~600KB gzipped) — cached separately
          if (id.includes('node_modules/three') ||
              id.includes('node_modules/@react-three')) {
            return 'vendor-three';
          }
          // Animation library
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          // Router
          if (id.includes('node_modules/react-router')) {
            return 'vendor-router';
          }
        },
      },
    },
  },
})
