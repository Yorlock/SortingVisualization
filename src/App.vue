<script setup lang="ts">
import { ref } from 'vue'
import NavBar from "./components/NavBar.vue";
import ArrayForm from "./components/ArrayForm.vue";
import type { Page } from '@/types/Page'

const pages = ref<Page[]>([])

async function getPages() {
  let res = await fetch('pages.json');
  pages.value = await res.json() as Page[];
}

getPages()
</script>

<template>
  <NavBar :pages="pages"></NavBar>
  <ArrayForm></ArrayForm>
</template>
