import { defineConfig } from 'vite';
import { name } from './package.json'
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: `/${name}`,
  build: {
    outDir: 'docs'
  }
});
