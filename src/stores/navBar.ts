import { defineStore } from "pinia";

export const useNavBarStore = defineStore("navBar", {
  state: () => ({
    activePage: 0,
    isDarkNavbar: false,
  }),
  getters: {
    getNavBarStyle: (state) =>
      state.isDarkNavbar
        ? ["navbar-dark", "bg-dark"]
        : ["navbar-light", "bg-light"],
  },
  actions: {
    changePage(newPage: number) {
      this.activePage = newPage;
    },
    changeNavbarMode() {
      this.isDarkNavbar = !this.isDarkNavbar;
    },
  },
});
