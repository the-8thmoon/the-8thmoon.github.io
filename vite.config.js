import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  pages: {
    index: {
      entry: 'src/main.jsx',
      template: 'index.html',
    },
    portfolio: {
      entry: 'src/main.jsx',
      template: 'public/portfolio/index.html',
    }
  },
})
