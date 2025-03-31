import { ref, shallowRef, watch } from 'vue'
import { createGlobalState } from '@vueuse/core'
import type { Editor } from 'grapesjs'

function createEditor() {
  const editor = shallowRef<Editor>()
  const isPreviewMode = ref(false)

  watch(editor, newEditor => {
    newEditor?.on('command:run:preview', () => { isPreviewMode.value = true })
    newEditor?.on('command:stop:preview', () => { isPreviewMode.value = false })
  })

  return {
    editor,
    isPreviewMode,
  }
}

export const useEditor = createGlobalState(createEditor)
