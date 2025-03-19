<template>
  <div id="editor" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { initialize } from './grapesjs'

onMounted(() => {
  initialize('#editor')
})
</script>
