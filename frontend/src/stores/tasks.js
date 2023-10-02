import { createStore } from "pinia";

export const useTasksStore = createStore("tasks", {
  state: () => ({
    tasks: [],
  }),
  getters: {},
  actions: {},
});
