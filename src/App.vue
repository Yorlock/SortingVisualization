<script setup>
import { ref } from "vue";
import { useCounterStore } from "./stores/counter";

const counter = useCounterStore();
</script>

<template>
  {{ counter.count }}
  <button @click="counter.increment()">Count</button>
</template>
