<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>

<template>
  {{ counter.count }}
  <button @click="counter.increment()">Count</button>
</template>
