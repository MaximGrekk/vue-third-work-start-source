import { createStore } from "pinia";

export const useUsersStore = createStore("users", {
  state: () => ({
    users: [],
  }),
  getters: {},
  actions: {},
});
