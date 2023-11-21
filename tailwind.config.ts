import { type Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

import theme from './tailwind.theme'

export default {
  theme,
  content: [
    // include index.html only in dev mode
    process.env.NODE_ENV === 'development' ? './index.html' : false,
    './src/main.css',
    './src/components/**/*.{css,vue}',
  ].filter(x => x),
  corePlugins: {
    // Comment out the next line if you want to use CSS reset from tailwind
    preflight: false,
  },
  plugins: [
    typography(),
  ],
  future: {
    // Uncomment the next line if you don't want generation of --tw-*-opacity variables
    // disableColorOpacityUtilitiesByDefault: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
} as Config
