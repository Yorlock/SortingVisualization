import { defineStore } from "pinia";

export const useArrayStore = defineStore("array", {
  state: () => ({
    numbers: JSON.parse(localStorage.getItem("numbers") ?? "[]"),
  }),
  //getters: {

  //},
  actions: {
    insertNumber(value: number) {
      if (value !== null) {
        this.numbers.push(value);
      }
      localStorage.setItem("numbers", JSON.stringify(this.numbers));
    },
    generateRandom(randomCount: number) {
      if (randomCount && randomCount > 0) {
        const newNumbers = Array.from({ length: randomCount }, () =>
          Math.floor(Math.random() * 100)
        );
        this.numbers.push(...newNumbers);
      }
      localStorage.setItem("numbers", JSON.stringify(this.numbers));
    },
    restartArray() {
      this.numbers = [];
      localStorage.setItem("numbers", JSON.stringify(this.numbers));
    },
    sortArray() {
      this.numbers.sort((a: number, b: number) => a - b);
      localStorage.setItem("numbers", JSON.stringify(this.numbers));
    },
  },
});
