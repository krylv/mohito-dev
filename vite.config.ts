import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve:{
   alias: {
      'src': path.resolve(__dirname, './src'),
      'lib': path.resolve(__dirname, './lib'),
    },
  }
})
