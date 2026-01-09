import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react-swc'
import { defineConfig, loadEnv } from 'vite'
import biomePlugin from 'vite-plugin-biome'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      react(),
      biomePlugin({
        mode: 'check',
        applyFixes: true,
        biomeCommandBase: 'npx biome',
      }),
      federation({
        name: 'host_app',
        remotes: {
          FanWallet:
            env.VITE_FAN_WALLET_URL ||
            'http://localhost:4173/assets/fanWallet.js',
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
  }
})
