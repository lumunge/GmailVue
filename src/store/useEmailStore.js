import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", {
  state: () => ({
    currentView: "Inbox",
    showLeftSideBar: true,
    emails: [
      {
        id: 1,
        title: "Email 1 Title",
        body: "Email one body",
        isRead: false,
        isSelected: false,
        isArchived: false,
      },
      {
        id: 2,
        title: "Email 2 Title",
        body: "Email two body",
        isRead: false,
        isSelected: false,
        isArchived: false,
      },
      {
        id: 3,
        title: "Email 3 Title",
        body: "Email three body",
        isRead: false,
        isSelected: false,
        isArchived: false,
      },
      {
        id: 4,
        title: "Email 4 Title",
        body: "Email four body",
        isRead: false,
        isSelected: false,
        isArchived: false,
      },
    ],
    archived: [],
  }),

  // getters
  getters: {
    unreadCount: (state) =>
      state.emails.filter((email) => email.isRead === false).length,
    archivedCount: (state) =>
      state.emails.filter((email) => email.isArchived === true).length,
    selectedCount: (state) =>
      state.emails.filter((email) => email.isSelected === true).length,
  },

  actions: {
    setShowLeftSideBar() {
      this.showLeftSideBar = this.showLeftSideBar == true ? false : true;
    },
    changeView(newView) {
      this.currentView = newView;
    },
  },
});
