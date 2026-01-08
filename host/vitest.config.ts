import path from 'node:path'
import { defineConfig } from 'vitest/config'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      'FanWallet/FanWallet': path.resolve(
        './src/__mocks__/FanWallet/FanWallet.tsx',
      ),
    },
  },
})
