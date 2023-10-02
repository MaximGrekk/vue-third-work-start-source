import { createStore } from "pinia";

export const useColumnsStore = createStore("columns", {
  state: () => ({
    columns: [],
  }),
  getters: {},
  actions: {},
});
