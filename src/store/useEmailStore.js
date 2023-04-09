import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", {
  state: () => ({
    currentView: "Inbox",
    showLeftSideBar: true,
  }),

  actions: {
    setShowLeftSideBar() {
      this.showLeftSideBar = this.showLeftSideBar == true ? false : true;
    },
    changeView(newView) {
      this.currentView = newView;
    },
  },
});
