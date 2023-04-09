import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", {
  state: () => ({
    currentView: "inbox",
  }),

  actions: {
    changeView(newView) {
      this.currentView = newView;
    },
  },
});
