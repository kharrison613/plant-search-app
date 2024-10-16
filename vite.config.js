import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, 
    open: true, 
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend server URL
        changeOrigin: true, 
        secure: false, // Set to true if  using HTTPS
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', 
    },
  },
});
