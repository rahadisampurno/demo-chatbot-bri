import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo-chatbot-bri/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
