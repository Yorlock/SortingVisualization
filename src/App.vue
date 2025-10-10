<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "./stores/counter";
import NavBar from "./components/NavBar.vue";

const counter = useCounterStore();
</script>

<template>
  <NavBar></NavBar>
  {{ counter.count }}
  <button @click="counter.increment()">Count</button>
</template>
