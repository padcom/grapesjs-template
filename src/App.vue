<template>
  <div ref="gjs" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { initialize } from './grapesjs'

const gjs = ref<HTMLElement>()

onMounted(() => {
  initialize(gjs.value!)
})
</script>
