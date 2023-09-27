import { defineStore } from 'pinia'

export const useCounter = defineStore("counter", {
  state: () => ({
    count: 0,
    name: 'Leonardo'
  }),
  getters: {
    doubleCount: (state) => {
      return state.count * 2
    },
    nameUppercase: (state) => {
      return state.name.toUpperCase()
    }
  },
  actions: {
    increment() {
      this.count++
    },
    reverseName() {
      const reverse = this.name.split('').reverse().join('')
      this.name = reverse
    }
  }
  //return { count, doubleCount, increment }
})
