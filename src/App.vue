<template>
  <main class="main__container">
  <LeftSidebar />
  <RightSidebar />
  <EmailContainer :emails="emails" />
</main>

</template>

<script>
import LeftSidebar from './components/LeftSidebar.vue'
import RightSidebar from './components/RightSidebar.vue'
import EmailContainer from './components/EmailContainer.vue'

export default{
  name: "App",
  components: {
    LeftSidebar,
    RightSidebar,
    EmailContainer
  },
  // props: ['archived', 'emails'],
  data(){
        return {
            archived: [],
            emails: [
                {id: 1, title: "Email One", content: "Email One Content", isRead: false, isArchive: false},
                {id: 2, title: "Email Two", content: "Email Two Content", isRead: false, isArchive: false},
                {id: 3, title: "Email Three", content: "Email Three Content", isRead: false, isArchive: false},
                {id: 4, title: "Email Four", content: "Email Four Content", isRead: false, isArchive: false},
                {id: 5, title: "Email Five", content: "Email Five Content", isRead: false, isArchive: false},
            ]
        }
    },
}


</script>

<style>
.main__container{
  display: flex;
  width: 100%;
  min-height: 100vh;
}
</style>
