/* eslint-env node */
import { defineVueAppConfig } from '@padcom/vite-config-vue'

import pkg from './package.json'

export default defineVueAppConfig(pkg, {
  build: {
    chunkSizeWarningLimit: 2 * 1024 * 1024,
  },
})
