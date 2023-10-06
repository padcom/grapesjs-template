/* eslint-env node */
import { fileURLToPath } from 'url'
import { defineConfig } from 'vitest/config'
import svg from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import i18n from '@intlify/unplugin-vue-i18n/vite'
import eslint from 'vite-plugin-eslint'
import nesting from 'tailwindcss/nesting'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

import pkg from './package.json'

/**
 * Compose an object of package.json fields for definition of `import.meta.env.XXX` constants
 */
function getPkgDefines() {
  return Object.keys(pkg)
    .filter(key => typeof pkg[key] !== 'function')
    .map(key => ({ [`import.meta.env.PACKAGE_${key.toUpperCase()}`]: JSON.stringify(pkg[key]) }))
    .reduce((acc, entry) => ({ ...acc, ...entry }), {})
}

// eslint-disable-next-line max-lines-per-function
export default defineConfig({
  define: {
    ...getPkgDefines(),
  },
  plugins: [
    svg({
      defaultImport: 'component',
    }),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
    i18n({
      runtimeOnly: false,
      include: fileURLToPath(new URL('./src/i18n/locales/**', import.meta.url)),
    }),
    eslint({
      lintOnStart: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        nesting(),
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: [
      './vitest.setup.js',
    ],
    coverage: {
      enabled: true,
      reporter: [
        'text',
        'lcov',
      ],
    },
  },
})
