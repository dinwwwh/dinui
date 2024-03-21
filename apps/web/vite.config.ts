import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@web': resolve(__dirname, './'),
      '@react-ui': resolve(__dirname, '../../packages/react-ui'),
    },
  },
})
