import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { resolve } from 'path'
// import { copyFileSync } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // {
    //   name: 'copy-redirects',
    //   closeBundle() {
    //     copyFileSync(resolve(__dirname, '_redirects'), resolve(__dirname, 'dist/_redirects'))
    //   }
    // }
  ],
})
