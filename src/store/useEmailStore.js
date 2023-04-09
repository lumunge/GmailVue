import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", {
  state: () => ({
    currentView: "Inbox",
    showLeftSideBar: true,
    currentEmail: {},
    selectedEmails: [],
    archivedEmails: [],
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
  }),

  // getters
  getters: {
    unreadCount: (state) =>
      state.emails.filter((email) => email.isRead === false).length,
    archivedCount: (state) => state.archivedEmails.length,
    selectedCount: (state) =>
      state.emails.filter((email) => email.isSelected === true).length,
    allSelected: (state) => state.emails.every((email) => email.isSelected),
  },

  actions: {
    selectEmail(emailId) {
      const email = this.emails.find((e) => e.id === emailId);
      console.log(this.selectedEmails);

      if (email) {
        const selected = email.isSelected;

        email.isSelected = !selected;
        if (!selected) {
          this.selectedEmails?.push(email);
        } else {
          const index = this.selectedEmails.findIndex((e) => e.id === email.id);
          this.selectedEmails.splice(index, 1);
        }
      }
      return;
    },
    markAsRead() {
      console.log("Marking as read");
      this.selectedEmails.forEach((email) => {
        email.isRead = true;
        email.isSelected = !email.isSelected;
      });
      this.selectedEmails = [];
    },
    selectAllEmails() {
      console.log("emails...");
      this.emails.forEach((email) => {
        email.isSelected = !email.isSelected;
        this.selectedEmails.push(email);
      });
      console.log(this.emails);
    },
    setShowLeftSideBar(emailId) {
      console.log(emailId);
      // open sidebar
      this.showLeftSideBar = this.showLeftSideBar == true ? false : true;
      // set selected email
      this.currentEmail = this.emails.find((email) => email.id === emailId);
    },
    changeView(newView) {
      this.currentView = newView;
    },
    isRead(emailId) {
      const currentEmail = this.emails.filter((email) => email.id === emailId);
      return currentEmail.isRead === true;
    },
    // selectEmail(emailId) {
    //   // set isSelected attr
    // },
    readEmail(emailId) {
      //  read current email
      const updatedEmails = this.emails.map((email) => {
        if (email.id === emailId) {
          //   console.log(email);

          return {
            ...email,
            isRead: true,
          };
        }
        return email;
      });
      this.emails = updatedEmails;
      return;
    },
    archiveEmail() {
      const emailIndex = this.emails.findIndex(
        (email) => email.id === this.currentEmail.id
      );
      if (emailIndex !== -1) {
        const archivedEmail = this.emails[emailIndex];
        archivedEmail.isArchived = true;
        this.archivedEmails.push(archivedEmail);
        this.emails.splice(emailIndex, 1);
      }
      console.log(this.archivedEmails);
    },
    // markAsRead(emailIds) {
    //   // mark selected email(s) as read
    // },
  },
});
