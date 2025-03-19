import type { Editor } from 'grapesjs'

// eslint-disable-next-line max-lines-per-function
export function showProjectData(editor: Editor) {
  editor.I18n.addMessages({
    en: {
      'project-data': {
        'show-project-data': 'Show project data',
        'project-data': 'Project data',
      },
    },
    de: {
      'project-data': {
        'show-project-data': 'Projektdaten anzeigen',
        'project-data': 'Projektdaten',
      },
    },
    pl: {
      'project-data': {
        'show-project-data': 'Pokaż dane projektu',
        'project-data': 'Dane projektu',
      },
    },
  })

  editor.Panels.addButton('options', {
    label: '!',
    attributes: {
      title: editor.t('project-data.show-project-data'),
    },
    command() {
      const projectData = JSON.stringify(editor.getProjectData(), null, 2)
      editor.Modal.open({
        title: editor.t('project-data.project-data'),
        content: `
          <pre class="gjs-project-data">${projectData}</pre>
        `,
      })
    },
  })
}
