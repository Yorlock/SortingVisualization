<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "./stores/counter";
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";

const counter = useCounterStore();
</script>

<template>
  <NavBar></NavBar>
  <Home></Home>
</template>
