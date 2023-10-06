import { createI18n } from 'vue-i18n'

import { default as en } from './locales/en'
import { default as pl } from './locales/pl'
import { default as de } from './locales/de'

const messages = {
  en,
  pl,
  de,
}

export default createI18n({
  locale: navigator.language,
  messages,
  missingWarn: false,
  fallbackWarn: false,
  legacy: false,
})
