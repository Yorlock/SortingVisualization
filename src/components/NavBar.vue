<script setup lang="ts">
import { useNavBarStore } from "@/stores/navBar";

const navBarStore = useNavBarStore();

const links = [
  { text: "Home", url: "index.html" },
  { text: "Algorithms", url: "algorithms.html" },
  { text: "Visualization", url: "visualization.html" },
];
</script>

<template>
  <nav
    class="navbar navbar-expand-lg"
    :class="{
      'navbar-light bg-light': !navBarStore.isDarkNavbar,
      'navbar-dark bg-dark': navBarStore.isDarkNavbar,
    }"
  >
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <a class="navbar-brand" href="#">Sorting Algorithms</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-for="(link, index) in links" class="nav-item" :key="index">
          <a
            class="nav-link"
            :class="{ active: navBarStore.activePage == index }"
            :href="link.url"
            :title="`This link goes to the ${link.text} page`"
            @click.prevent="navBarStore.changePage(index)"
            >{{ link.text }}</a
          >
        </li>
      </ul>
      <form class="d-flex">
        <button
          class="btn btn-primary"
          @click.prevent="navBarStore.changeNavbarMode()"
        >
          Switch mode
        </button>
      </form>
    </div>
  </nav>
</template>
