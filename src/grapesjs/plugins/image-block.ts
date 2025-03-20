import { type Editor } from 'grapesjs'

export function imageBlock(editor: Editor) {
  editor.I18n.addMessages({
    de: {
      'blockManager.labels.image': 'Bild',
    },
    pl: {
      'blockManager.labels.image': 'Obrazek',
    },
  })

  editor.Blocks.add('image', {
    label: 'Image',
    media: '<i class="fa fa-image"></i>',
    activate: true,
    content: { type: 'image' },
  })
}
