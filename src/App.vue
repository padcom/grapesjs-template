<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { initialize } from './grapesjs'
import { useEditor } from './composables/editor'

const { editor } = useEditor()

onMounted(async () => {
  editor.value = await initialize({
    container: '#editor',
    height: '100dvh',
    i18n: {
      // debug: true,
      // locale: 'de',
      // detectLocale: false,
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>
