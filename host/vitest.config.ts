import { defineConfig } from 'vitest/config'
import path from 'path'
export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    alias: {
      'FanWallet/FanWallet': path.resolve('./src/__mocks__/FanWallet/FanWallet.tsx'),
    },
  },
})