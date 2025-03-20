<template>
  <div ref="container" />
</template>

<script lang="ts" setup>
import { useTemplateRef, onMounted, onBeforeUnmount } from 'vue'
import { useEditor } from '../composables/editor'
import { initialize } from '../grapesjs'
import { useI18n } from '@/composables/i18n'

const container = useTemplateRef('container')
const { editor } = useEditor()
const { locale } = useI18n()

onMounted(async () => {
  editor.value = await initialize({
    container: container.value!,
    i18n: {
      locale: locale.value,
      detectLocale: false,
    },
  })
})

onBeforeUnmount(() => {
  editor.value?.destroy()
  editor.value = undefined
})
</script>
