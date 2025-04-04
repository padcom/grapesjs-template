import type { Editor } from 'grapesjs'

class HTMLExampleComponentElement extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.shadowRoot!.innerHTML = '<h2><slot></slot></h2>'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'example-component': HTMLExampleComponentElement
  }
}

export function registerExampleElement() {
  if (!customElements.get('example-component')) {
    customElements.define('example-component', HTMLExampleComponentElement)
  }
}

export function addExampleComponentMessages(editor: Editor) {
  editor.I18n.addMessages({
    en: {
      'domComponents.names.example-component': 'Example component',
      'blockManager.labels.example-component': 'Example component',
    },
    de: {
      'domComponents.names.example-component': 'Beispielkomponente',
      'blockManager.labels.example-component': 'Beispielkomponente',
    },
    pl: {
      'domComponents.names.example-component': 'Przykładowy komponent',
      'blockManager.labels.example-component': 'Przykładowy komponent',
    },
  })
}

export function addExampleComponentType(editor: Editor) {
  editor.Components.addType('example-component', {
    block: {
      category: 'Example',
      label: 'Example component',
      media: '<i class="fa fa-braille"></i>',
    },
    isComponent: el => el.tagName === 'EXAMPLE-COMPONENT',
    model: {
      defaults: {
        tagName: 'example-component',
        traits: [
          { id: 'alt', name: 'alt', type: 'string' },
        ],
      },
    },
    view: {
      init({ el }) {
        el.addEventListener('click', () => {
          console.log('Hello, world!')
        })
      },
      onRender({ el }) {
        el.innerText = 'Example component'
      },
    },
  })
}
