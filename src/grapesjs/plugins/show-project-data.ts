import type { Editor } from 'grapesjs'

export function addShowProjectDataMessages(editor: Editor) {
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
}

export function addShowProjectDataCommand(editor: Editor) {
  editor.Commands.add('show-project-data', () => {
    const projectData = JSON.stringify(editor.getProjectData(), null, 2)
    editor.Modal.open({
      title: editor.t('cmd.project-data.project-data'),
      content: `
        <pre class="gjs-project-data">${projectData}</pre>
      `,
    })
  })
}

export function addShowProjectDataKeyboardShortcut(editor: Editor) {
  editor.Keymaps.add('show-project-data', 'ctrl+e', 'show-project-data', { prevent: true })
}

export function addShowProjectDataPanelButton(editor: Editor) {
  editor.Panels.addButton('options', {
    className: 'fa fa-bug',
    attributes: {
      title: editor.t('cmd.project-data.show-project-data'),
    },
    command: 'show-project-data',
  })
}
