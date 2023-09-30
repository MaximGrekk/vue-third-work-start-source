import { createStore } from "pinia";

export const useTasksStore = createStore("tasks", {
  state: () => ({}),
  getters: {},
  actions: {},
});
