import { shallowRef } from 'vue'
import { createGlobalState } from '@vueuse/core'
import type { Editor } from 'grapesjs'

function createEditor() {
  const editor = shallowRef<Editor>()

  return {
    editor,
  }
}

export const useEditor = createGlobalState(createEditor)
