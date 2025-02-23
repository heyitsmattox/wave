import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5011", // Backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    'process.env': process.env,
  },
});
