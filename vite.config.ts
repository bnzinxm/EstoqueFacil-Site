import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build',  // Garante que a pasta de saída seja chamada 'build'
  },
  base: '/EstoqueFacil/',  // Definindo a base para o GitHub Pages
});
