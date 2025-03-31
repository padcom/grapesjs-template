import type { Editor } from 'grapesjs'

export function undoRedo(editor: Editor) {
  editor.Panels.addButton('options', {
    id: 'undo',
    className: 'fa fa-undo',
    command: 'core:undo',
    attributes: {
      title: editor.I18n.t('undo'),
    },
  })
  editor.Panels.addButton('options', {
    id: 'redo',
    className: 'fa fa-repeat',
    command: 'core:redo',
    attributes: {
      title: editor.I18n.t('redo'),
    },
  })
}
