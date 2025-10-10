import { defineStore } from "pinia";

export const useActivePageStore = defineStore("activePage", {
  state: () => ({
    activePage: 0,
  }),
  getters: {
    value: (state) => state.activePage,
  },
  actions: {
    changePage(newPage: number) {
      this.activePage = newPage;
    },
  },
});
