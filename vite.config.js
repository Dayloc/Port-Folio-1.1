import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Port-Folio-1.1/',  
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist'
  }
})
