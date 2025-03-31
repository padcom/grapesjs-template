<template>
  <div v-cloak id="toolbar" :class="{ hidden: isPreviewMode }">
    <header>{{ t('title') }}</header>
    <div class="spacer" />
    <LanguageSelector />
  </div>
  <!--
    https://github.com/GrapesJS/grapesjs/issues/3622#issuecomment-888260710

    We're keying the editor here so that it gets re-initialized after locale is changed.
    Otherwise the editor's locale doesn't change everywhere (e.g the list of blocks):
  -->
  <Editor :key="locale" :locale="locale" />
</template>

<script lang="ts" setup>
import LanguageSelector from './components/LanguageSelector.vue'
import Editor from './components/Editor.vue'

import { useI18n } from './composables/i18n'
import { useEditor } from './composables/editor'

const { t, locale } = useI18n()
const { isPreviewMode } = useEditor()
</script>

<style lang="postcss" scoped>
#toolbar {
  padding: 4px 2px;
  display: flex;
}

.spacer {
  flex: 1;
}

header {
  font-weight: bolder;
  font-size: 24px;
  color: #555;
  margin: 0;
}
</style>
