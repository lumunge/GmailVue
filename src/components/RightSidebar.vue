<template>
    <div :class="{'sidebar__container': useEmail.showLeftSideBar, 'sidebar__container active': !useEmail.showLeftSideBar}" >
    <header class="sidebar__header">
        <div class="sidebar__top__header">
            Close(esc)
        </div>
        <div>
            <button>Mark as read(r)</button>
            <button @click="useEmail.archiveEmail()">Archive(a)</button>
        </div>
    </header>
    <main>
        <div>
            <h4>{{ useEmail.currentEmail?.title }}</h4>
        </div>
        <div>
            <p>{{ useEmail.currentEmail?.body }}</p>
        </div>
    </main>
</div>
<div @click="useEmail.setShowLeftSideBar()" :class="{'sidebar__overlay': useEmail.showLeftSideBar, 'sidebar__overlay active': !useEmail.showLeftSideBar}"></div>
</template>

<style>

.sidebar__container {
  width: 400px;
  background-color: #fff;
  min-height: 100vh;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 1;
  transition: 0.5s;
  padding: 0 1rem;
}

.sidebar__header{
    display: flex;
    flex-direction: column;
}
.sidebar__top__header{
    width: 100%;
    padding-bottom: 1rem;
}

.sidebar__container.active {
  right: 0;
}
.sidebar__overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
}
.sidebar__overlay.active {
  opacity: 1;
  visibility: visible;
}
.sidebar__content{
    display: flex;
    flex-direction: column;
}
</style>

<script>
import {useEmailStore} from '@/store/useEmailStore'

export default{
    name: "EmailHeader",
    data(){
        return{
            useEmail: useEmailStore()
        }
    }
}

</script>