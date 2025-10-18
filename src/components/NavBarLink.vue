<script setup lang="ts">
import { computed } from 'vue'
import type { Page } from '@/types/Page'

const props = defineProps<{
  'page': Page,
  'isActive': boolean
}>()

const activeClasses = computed(() => {
  return {
    active: props.isActive,
    emphesize: props.isActive
  }
})
</script>

<template>
  <a
    class="nav-link"
    :href="page.url"
    :class="activeClasses"
    :title="`This link goes to the ${page.text} page`"
    >{{ page.text }}</a
  >
</template>

<style scoped>
.emphesize {
  text-decoration: underline !important;
}
</style>