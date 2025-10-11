import { defineStore } from "pinia";

export const useNavBarStore = defineStore("navBar", {
  state: () => ({
    activePage: 0,
    isDarkNavbar: false
  }),
  getters: {
    //getActivePage: (state) => state.activePage,
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
