<template>
  <div v-cloak id="toolbar">
    <div>{{ t('title') }}</div>
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

const { t, locale } = useI18n()
</script>
