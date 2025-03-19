import { shallowRef, computed, readonly, watch } from 'vue'
import { createGlobalState } from '@vueuse/core'
import type { Editor, Page, Asset, AssetProps, RemoveOptions, AddOptions } from 'grapesjs'

function createEditor() {
  const editor = shallowRef<Editor>()

  return {
    editor,
  }
}

export const useEditor = createGlobalState(createEditor)

function createEditorPages() {
  const { editor } = useEditor()
  const pages = shallowRef<Page[]>([])
  const selectedPage = shallowRef<Page>()

  function update() {
    pages.value = editor.value?.Pages.getAll() || []
    selectedPage.value = editor.value?.Pages.getSelected()
  }

  watch([editor], () => {
    update()
    editor.value?.on('load', update)
    editor.value?.on('storage:after', update)
    editor.value?.on('page', update)
  })

  return {
    pages,
    selectedPage,
  }
}

export const useEditorPages = createGlobalState(createEditorPages)

// eslint-disable-next-line max-lines-per-function
function createEditorAssets() {
  const { editor } = useEditor()

  const assets = shallowRef<Asset[]>([])
  const images = computed(() => assets.value.filter(asset => asset.getType() === 'image'))

  function update() {
    console.log('updating assets')

    assets.value = editor.value ? [...editor.value.Assets.getAll()] : []
  }

  function addAsset(asset: string | AssetProps | (string | Asset)[], options?: AddOptions) {
    editor.value?.Assets.add(asset, options)
  }

  function removeAsset(asset: string | Asset, options?: RemoveOptions) {
    editor.value?.Assets.remove(asset, options)
  }

  watch([editor], () => {
    update()
    editor.value?.on('load', update)
    editor.value?.on('storage:after', update)
    editor.value?.on('asset', update)
  })

  return {
    addAsset,
    removeAsset,
    assets: readonly(assets),
    images,
  }
}

export const useEditorAssets = createGlobalState(createEditorAssets)
