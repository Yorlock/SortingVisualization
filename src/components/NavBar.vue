<script setup lang="ts">
import { useActivePageStore } from "@/stores/activePage";

const activePage = useActivePageStore();

const links = [
  { text: "Home", url: "index.html" },
  { text: "Algorithms", url: "algorithms.html" },
  { text: "Visualization", url: "visualization.html" },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand" href="#">Sorting Algorithms</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(link, index) in links" class="nav-item" :key="index">
          <a
            class="nav-link"
            :href="link.url"
            :title="`This link goes to the ${link.text} page`"
            @click="activePage.changePage(index)"
            >{{ link.text }}</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
