import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    count: (state) => state.counter,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
