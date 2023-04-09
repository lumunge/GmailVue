import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", {
  state: () => ({
    currentView: "Inbox",
    showLeftSideBar: true,
    currentEmail: {},
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
    archivedCount: (state) =>
      state.emails.filter((email) => email.isArchived === true).length,
    selectedCount: (state) =>
      state.emails.filter((email) => email.isSelected === true).length,
  },

  actions: {
    setShowLeftSideBar(emailId) {
      console.log(emailId);
      // open sidebar
      this.showLeftSideBar = this.showLeftSideBar == true ? false : true;
      // set selected email
      this.currentEmail = this.emails.find((email) => email.id === emailId);

      //   console.log("Curent Email: ", this.currentEmail);

      // read current email
      //   const updatedEmails = this.emails.map((email) => {
      //     if (email.id === emailId) {
      //       return {
      //         ...email,
      //         isRead: true,
      //       };
      //     }
      //     console.log(email);
      //     return email;
      //   });
      //   this.emails = updatedEmails;
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
      // set current email to read
      // mark email as read
      //   const currentEmail = this.emails.filter((email) => email.id === emailId);
      //   currentEmail.isRead = true;

      console.log("reading email...");

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
    // archiveEmail(emailId) {
    //   // set archive attr
    // },
    // markAsRead(emailIds) {
    //   // mark selected email(s) as read
    // },
  },
});
