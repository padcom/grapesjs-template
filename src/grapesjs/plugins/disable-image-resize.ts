import type { Editor } from 'grapesjs'

export function disableImageResize(editor: Editor) {
  editor.Components.addType('image', {
    extend: 'image',
    model: {
      defaults: {
        resizable: false,
      },
    },
  })
}
