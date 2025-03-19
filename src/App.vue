<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useEditor } from './composables/editor'
import { initialize } from './grapesjs'

const { editor } = useEditor()

onMounted(async () => {
  editor.value = await initialize('#editor')
})
</script>
