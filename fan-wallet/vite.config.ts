import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import biomePlugin from 'vite-plugin-biome'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const PORT = Number(env.VITE_APP_PORT) || 5172

  return {
    plugins: [
      react(),
      biomePlugin({
        mode: 'check',
        files: './src/.',
        applyFixes: true,
      }),
      federation({
        name: 'fan_wallet',
        filename: 'fanWallet.js',
        exposes: {
          './FanWallet': './src/App.tsx',
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
    server: {
      port: PORT,
    },
  }
})
