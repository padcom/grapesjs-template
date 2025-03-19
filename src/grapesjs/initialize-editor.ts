import grapesjs, { type Editor } from 'grapesjs'

import { openBlocksByDefault } from './open-blocks-by-default'
import { showProjectData } from './show-project-data'
import { disableImageResize } from './disable-image-resize'
import { example } from './example'

import { messages } from '../i18n'

export function initialize(container: HTMLElement | string): Promise<Editor> {
  return new Promise(resolve => {
    const editor = grapesjs.init({
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

    editor.onReady(() => {
      resolve(editor)
    })
  })
}
