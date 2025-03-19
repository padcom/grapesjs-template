import { type Editor } from 'grapesjs'

export function example(editor: Editor) {
  editor.Blocks.add('example', {
    label: 'Example',
    activate: true,
    content: '<h1>Hello, world!</h1>',
  })

  editor.Blocks.add('image', {
    label: 'Image',
    activate: true,
    content: { type: 'image' },
  })
}
