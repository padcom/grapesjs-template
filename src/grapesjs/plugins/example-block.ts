import { type Editor } from 'grapesjs'

export function exampleBlock(editor: Editor) {
  editor.I18n.addMessages({
    de: {
      'blockManager.labels.example-block': 'Beispielblock',
    },
    pl: {
      'blockManager.labels.example-block': 'Przykładowy blok',
    },
  })

  editor.Blocks.add('example-block', {
    label: 'Example',
    media: '<i class="fa fa-briefcase"></i>',
    activate: true,
    content: `<h1>${editor.t('title')}</h1>`,
  })
}
