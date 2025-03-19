import { type Editor } from 'grapesjs'

export function imageBlock(editor: Editor) {
  editor.I18n.addMessages({
    en: {
      'blockManager.labels.image': 'Image',
    },
    de: {
      'blockManager.labels.image': 'Bild',
    },
    pl: {
      'blockManager.labels.image': 'Obrazek',
    },
  })

  editor.Blocks.add('image', {
    label: 'Image',
    activate: true,
    content: { type: 'image' },
  })
}
