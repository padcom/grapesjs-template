import { type Editor } from 'grapesjs'

export function exampleBlock(editor: Editor) {
  editor.I18n.addMessages({
    en: {
      'blockManager.labels.example': 'Example',
    },
    de: {
      'blockManager.labels.example': 'Beispiel',
    },
    pl: {
      'blockManager.labels.example': 'Przykład',
    },
  })

  editor.Blocks.add('example', {
    label: 'example',
    activate: true,
    content: `<h1>${editor.t('title')}</h1>`,
  })
}
