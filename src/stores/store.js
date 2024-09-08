import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counterStore', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++
    },
    randomizeCounter() {
      this.count = Math.round(100 * Math.random())
    },
  }
});