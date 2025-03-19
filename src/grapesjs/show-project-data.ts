import type { Editor } from 'grapesjs'

export function showProjectData(editor: Editor) {
  const projectData = () => JSON.stringify(editor.getProjectData(), null, 2)

  editor.Panels.addButton('options', {
    label: '!',
    command() {
      editor.Modal.open({
        title: 'Project data',
        content: `
          <pre class="gjs-project-data">${projectData()}</pre>
        `,
      })
    },
  })
}
