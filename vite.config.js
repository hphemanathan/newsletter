import { defineConfig } from 'vite';
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        verbose: true,
        silenceDeprecations: ['legacy-js-api'],
        api: 'modern-compiler',
      },
    },
  },
});