import grapesjs from 'grapesjs'

import { openBlocksByDefault } from './open-blocks-by-default'
import { showProjectData } from './show-project-data'
import { disableImageResize } from './disable-image-resize'
import { example } from './example'

import { messages } from '../i18n'
import { useEditor } from '../composables/editor'

export function initialize(container: HTMLElement | string) {
  const { editor } = useEditor()

  editor.value = grapesjs.init({
    container,
    height: '100dvh',
    plugins: [
      example,
      openBlocksByDefault,
      showProjectData,
      disableImageResize,
    ],
    assetManager: {
      assets: [
        'https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg',
      ],
    },
    i18n: {
      messages,
    },
    storageManager: false,
  })
}
