import { defineConfig } from 'vite';
import { name } from './package.json';
import react from '@vitejs/plugin-react-swc';
import { Plugin as pluginImportToCDN } from 'vite-plugin-cdn-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    pluginImportToCDN({
      modules: ['react', 'react-dom', 'dayjs', 'antd'],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
      '3DObjects': '/src/views/Threejs/3DObjects',
    },
  },
  base: `/${name}`,
  build: {
    outDir: 'docs',
  },
});
