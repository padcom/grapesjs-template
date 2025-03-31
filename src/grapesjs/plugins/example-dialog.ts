import type { Editor } from 'grapesjs'

export function exampleEditorDialog(editor: Editor) {
  editor.Commands.add('example', (em, sender, { value }) => {
    editor.Modal.open({
      title: 'Hello, world!',
      content: `I am dialog content; value: "${value}"`,
    })
  })

  editor.Panels.addButton('options', {
    id: 'example',
    className: 'fa fa-snowflake-o',
    command: 'example',
    options: { value: 1 },
  })
}
