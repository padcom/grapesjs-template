import config from '@padcom/eslint-config-vue'

export default [
  ...config['flat/browser'],
  {
    rules: {
      'jsdoc/require-jsdoc': 'off',
    },
  },
]
