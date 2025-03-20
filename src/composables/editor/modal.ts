import { ref, watch } from 'vue'
import { createGlobalState } from '@vueuse/core'
import { useEditor } from './editor'

export interface OpenModalOptions {
  title?: string
  content: HTMLElement | string
  attributes?: Record<string, string>
  onOpen?: () => void
  onClose?: () => void
}

function createModal() {
  const { editor } = useEditor()

  const isOpen = ref(false)

  watch([editor], () => {
    editor.value?.on('modal:open', () => { isOpen.value = true })
    editor.value?.on('modal:close', () => { isOpen.value = false })
  })

  // eslint-disable-next-line complexity
  function open(opts: OpenModalOptions) {
    if (opts.onOpen) editor.value?.once('modal:open', opts.onOpen)
    if (opts.onClose) editor.value?.once('modal:close', opts.onClose)
    editor.value?.Modal.open(opts)
  }

  function close() {
    editor.value?.Modal.close()
  }

  return {
    open,
    close,
    isOpen,
  }
}

export const useModal = createGlobalState(createModal)
