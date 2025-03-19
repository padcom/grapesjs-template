import { shallowRef, watch } from 'vue'
import { createGlobalState } from '@vueuse/core'
import type { Page } from 'grapesjs'
import { useEditor } from './editor'

function createEditorPages() {
  const { editor } = useEditor()
  const pages = shallowRef<Page[]>([])
  const selectedPage = shallowRef<Page>()

  function update() {
    pages.value = editor.value?.Pages.getAll() || []
    selectedPage.value = editor.value?.Pages.getSelected()
  }

  watch([editor], () => {
    update()
    editor.value?.on('load', update)
    editor.value?.on('storage:after', update)
    editor.value?.on('page', update)
  })

  return {
    pages,
    selectedPage,
  }
}

export const useEditorPages = createGlobalState(createEditorPages)
