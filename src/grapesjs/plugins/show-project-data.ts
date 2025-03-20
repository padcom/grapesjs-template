import type { Editor } from 'grapesjs'

export function showProjectData(editor: Editor) {
  editor.I18n.addMessages({
    en: {
      'cmd.project-data.show-project-data': 'Show project data',
      'cmd.project-data.project-data': 'Project data',
    },
    de: {
      'cmd.project-data.show-project-data': 'Projektdaten anzeigen',
      'cmd.project-data.project-data': 'Projektdaten',
    },
    pl: {
      'cmd.project-data.show-project-data': 'Pokaż dane projektu',
      'cmd.project-data.project-data': 'Dane projektu',
    },
  })

  editor.Panels.addButton('options', {
    className: 'fa fa-bug',
    attributes: {
      title: editor.t('cmd.project-data.show-project-data'),
    },
    command() {
      const projectData = JSON.stringify(editor.getProjectData(), null, 2)
      editor.Modal.open({
        title: editor.t('cmd.project-data.project-data'),
        content: `
          <pre class="gjs-project-data">${projectData}</pre>
        `,
      })
    },
  })
}
