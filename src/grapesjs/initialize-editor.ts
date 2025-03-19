import grapesjs from 'grapesjs'
import type { Editor, EditorConfig } from 'grapesjs'

import { merge } from '../lib/merge'

import * as plugins from './plugins'
import * as configuration from './configuration'

export function initialize(config: EditorConfig): Promise<Editor> {
  return new Promise(resolve => {
    const editor = grapesjs.init(merge(config, {
      plugins: Object.values(plugins),
      ...configuration,
    }))

    editor.onReady(() => {
      resolve(editor)
    })
  })
}
