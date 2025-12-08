import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import biomePlugin from 'vite-plugin-biome';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    biomePlugin({
      mode: 'check',
      files: './src/.',
      applyFixes: true,
    }),
    federation({
      name: 'host_app',
      remotes: {
        FanWallet: 'http://localhost:4173/assets/fanWallet.js',
      },
      shared: ['react'],
    }),
  ],
  css: {
    transformer: 'lightningcss',
  },
  build: {
    cssMinify: 'lightningcss',
  },
});
