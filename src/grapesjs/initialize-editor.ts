import grapesjs from 'grapesjs'

import { openBlocksByDefault } from './open-blocks-by-default'
import { showProjectData } from './show-project-data'
import { disableImageResize } from './disable-image-resize'
import { example } from './example'

import { messages } from '../i18n'
import { useEditor } from '../composables/editor'

export function initialize(gjs: HTMLElement | string) {
  const { editor } = useEditor()

  editor.value = grapesjs.init({
    container: gjs,
    height: '100dvh',
    storageManager: false,
    plugins: [
      example,
      openBlocksByDefault,
      showProjectData,
      disableImageResize,
    ],
    i18n: {
      messages,
    },
  })
}
