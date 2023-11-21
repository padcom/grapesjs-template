<template>
  <div ref="gjs" />
</template>

<script lang="ts" setup>
import grapesjs from 'grapesjs'
import { ref, onMounted } from 'vue'

import { openBlocksByDefault, showProjectData, example } from '@/grapesjs'

const gjs = ref<HTMLElement>()

onMounted(() => {
  grapesjs.init({
    container: gjs.value,
    height: '100dvh',
    storageManager: false,
    plugins: [
      example,
      openBlocksByDefault,
      showProjectData,
    ],
  })
})
</script>

<style lang="postcss">
@import "grapesjs/dist/css/grapes.min.css";
</style>
