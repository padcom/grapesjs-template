import { ref, readonly, watch } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { useEditor } from './editor'

export interface TranslateOpts {
  params?: Record<string, any>
  l?: string
  noWarn?: boolean
}

function getAgentLocale(defaultLocale = 'en') {
  return globalThis.navigator?.language.split('-')[0] || defaultLocale
}

function createI18n() {
  const { editor } = useEditor()

  const locale = ref(getAgentLocale())
  const locales = ref<string[]>([])

  function t(key: string, opts?: TranslateOpts) {
    if (editor.value) {
      return editor.value.t(key, opts)
    } else {
      return key
    }
  }

  function update() {
    locales.value = [...Object.keys(editor.value?.I18n?.getMessages() || { en: '' })]
  }

  watch([editor], () => {
    editor.value?.onReady(update)
    editor.value?.on('i18n:locale', ({ value }: { value: string }) => {
      locale.value = value
    })
  })

  return {
    t,
    locale,
    locales: readonly(locales),
  }
}

export const useI18n = createGlobalState(createI18n)
