import fs from 'node:fs'
import { defineConfig, Plugin } from 'vite';
import { name } from './package.json';
import react from '@vitejs/plugin-react-swc';
import { Plugin as pluginImportToCDN } from 'vite-plugin-cdn-import';

/**
 * build 时把 README.md 内容注入到 copyedData.txt 中，注意此功能只针对一个特定的文件名，防止影响其他功能
 */
const copyedDataTxtPlugin: Plugin = {
  name: 'copyed-data-txt-plugin',
  transform(code, id) { // 
    if (id.endsWith('copyedData.txt')) {
      const content = fs.readFileSync(id, 'utf-8');
      return `export default ${JSON.stringify(content)}`;
    }
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copyedDataTxtPlugin,
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