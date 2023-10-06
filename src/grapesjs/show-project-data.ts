/* eslint-disable indent */
import type { Editor } from 'grapesjs'

export function showProjectData(editor: Editor) {
  // console.log(editor.Panels.getPanels().map(panel => panel.id))
  editor.Panels.addButton('options', {
    label: '!',
    command() {
      editor.Modal.open({
        title: 'Project data',
        content: `
          <pre style="max-height: 50vh; overflow: auto; color: #eee;">${
            JSON.stringify(editor.getProjectData(), null, 2)
          }</pre>
        `,
      })
    },
  })
}
