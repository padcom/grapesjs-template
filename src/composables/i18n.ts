import { ref, readonly, watch } from 'vue'
import { useEditor } from './editor'

export interface TranslateOpts {
  params?: Record<string, any>,
  l?: string,
  noWarn?: boolean,
}

export function useI18n() {
  const { editor } = useEditor()

  function t(key: string, opts?: TranslateOpts) {
    if (editor.value) {
      return editor.value.t(key, opts)
    } else {
      return key
    }
  }

  const locale = ref('en')

  function update() {
    locale.value = editor.value?.I18n.getLocale() || 'en'
  }

  watch([editor], () => {
    update()
    editor.value?.on('i18n', update)
  })

  return {
    t,
    locale: readonly(locale),
  }
}
