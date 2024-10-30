<template>
  <div ref="gjs" />
</template>

<script lang="ts" setup>
import grapesjs from 'grapesjs'
import { ref, onMounted } from 'vue'

import { useEditor } from './composables/editor'
import { openBlocksByDefault, showProjectData, example } from './grapesjs'
import { messages } from './i18n'

const gjs = ref<HTMLElement>()
const { editor } = useEditor()

onMounted(() => {
  editor.value = grapesjs.init({
    container: gjs.value,
    height: '100dvh',
    storageManager: false,
    plugins: [
      example,
      openBlocksByDefault,
      showProjectData,
    ],
    i18n: {
      messages,
    },
  })
})
</script>
