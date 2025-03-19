/* eslint-env node */
import { defineVueAppConfig } from '@padcom/vite-config-vue'

import pkg from './package.json'

export default defineVueAppConfig(pkg, {
  build: {
    rollupOptions: {
      external: [
        'vue',
        'grapesjs',
        // 'grapesjs/locale/en',
        // 'grapesjs/locale/de',
        // 'grapesjs/locale/pl',
      ],
    },
  },
})
