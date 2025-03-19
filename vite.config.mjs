/* eslint-env node */
/* eslint-disable jsdoc/valid-types */
/* eslint-disable @stylistic/brace-style */
import { copyFile } from 'node:fs/promises'
import { defineVueAppConfig } from '@padcom/vite-config-vue'

import pkg from './package.json'

/** @type import('vite').Plugin */
const copyLibrariesToPublic = {
  name: 'copy-libraries-to-public',
  async load() {
    try {
      await copyFile('./node_modules/vue/dist/vue.esm-browser.prod.js', './public/vue.js')
      await copyFile('./node_modules/grapesjs/dist/grapes.mjs', './public/grapes.mjs')
      await copyFile('./node_modules/grapesjs/dist/css/grapes.min.css', './public/grapes.css')
    } catch (e) {
      console.warn('Unable to copy files', e)
    }
  },
}

export default defineVueAppConfig(pkg, {
  plugins: [
    copyLibrariesToPublic,
  ],
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
