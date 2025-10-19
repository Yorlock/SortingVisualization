import { defineStore } from "pinia";

export const useNavBarStore = defineStore("navBar", {
  state: () => ({
    activePage: JSON.parse(localStorage.getItem('activePage') ?? '0'),
    isDarkNavbar: JSON.parse(localStorage.getItem('isDarkNavbar') ?? 'false'),
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
      localStorage.setItem('activePage', JSON.stringify(this.activePage))
    },
    changeNavbarMode() {
      this.isDarkNavbar = !this.isDarkNavbar;
      localStorage.setItem('isDarkNavbar', JSON.stringify(this.isDarkNavbar))
    },
  },
});
