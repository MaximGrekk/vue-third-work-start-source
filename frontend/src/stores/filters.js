import { createStore } from "pinia";

export const useFiltersStore = createStore("filters", {
  state: () => ({
    search: "",
    users: [],
    statuses: [],
  }),
  getters: {},
  actions: {},
});
