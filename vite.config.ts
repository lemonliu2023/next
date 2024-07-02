import { defineConfig } from 'vite';
import { name } from './package.json';
import react from '@vitejs/plugin-react-swc';
import { Plugin as pluginImportToCDN } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginImportToCDN({
      modules: ['antd', 'react', 'react-dom', 'dayjs'],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: `/${name}`,
  build: {
    outDir: 'docs',
  },
});
