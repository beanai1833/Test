import { defineStore } from 'pinia';

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
  },
  // optional actions
  actions: {

  },
});

export default useMainStore;
