import { type Editor } from 'grapesjs'

export function openBlocksByDefault(editor: Editor) {
  editor.onReady(() => {
    editor.Panels.getButton('views', 'open-blocks')?.set('active', true)
  })
}
