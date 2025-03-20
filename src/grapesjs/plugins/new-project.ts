import type { Editor } from 'grapesjs'

function addNewProjectMessages(editor: Editor) {
  editor.I18n.addMessages({
    en: {
      'cmd.new-project.title': 'Create new project',
      'cmd.new-project.confirm-new-project': 'Are you sure you want to create a new project?',
    },
    de: {
      'cmd.new-project.title': 'Neues Projekt erstellen',
      'cmd.new-project.confirm-new-project': 'Möchten Sie wirklich ein neues Projekt erstellen?',
    },
    pl: {
      'cmd.new-project.title': 'Utwórz nowy projekt',
      'cmd.new-project.confirm-new-project': 'Czy jesteś pewien, że chcesz utworzyć nowy projekt?',
    },
  })
}

function addNewProjectCommand(editor: Editor) {
  editor.Commands.add('new-project', () => {
    // eslint-disable-next-line no-alert
    if (confirm(editor.t('cmd.new-project.confirm-new-project'))) {
      editor.loadProjectData({
        pages: [{
          type: 'main',
          frames: [{ component: { type: 'wrapper' } }],
        }],
      })
      void editor.Storage.store(editor.getProjectData())
    }
  })
}

function addNewProjectPanelButton(editor: Editor) {
  editor.Panels.addButton('options', {
    id: 'new-file',
    className: 'fa fa-file',
    command: 'new-project',
    attributes: {
      title: editor.t('cmd.new-project.title'),
    },
  })
}

export function newProject(editor: Editor) {
  addNewProjectMessages(editor)
  addNewProjectCommand(editor)
  addNewProjectPanelButton(editor)
}
