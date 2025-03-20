<template>
  <div class="langauge-selector">
    <label :for="id">{{ t('language-selector') }}</label>
    <select :id v-model="locale">
      <option v-for="value in locales" :key="value" :value>{{ t(value) }}</option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { useId } from 'vue'
import { useI18n } from '../composables/i18n'

const id = useId()
const { t, locale, locales } = useI18n()
</script>

<style lang="postcss" scoped>
.langauge-selector {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  select {
    padding: 2px 8px;
  }
}
</style>
