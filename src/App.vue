<template>
  <main class="main__container">
  <LeftSidebar />
  <RightSidebar />
  <EmailContainer />
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
  }
}


</script>

<style>
.main__container{
  display: flex;
  width: 100%;
  min-height: 100vh;
}
</style>
