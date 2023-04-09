<template>
    <main class="left__sidebar">
    <button class="btn" @click="useEmail.changeView('Inbox')">Inbox(3)</button>
    <button class="btn" @click="useEmail.changeView('Archive')">Archive(0)</button>
    <button class="btn logout__btn">Logout</button>
</main>
</template>

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

<style>
.left__sidebar{
    background-color: #333;
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    padding: 1rem 0
}
.btn{
    border-radius: 5px;
    min-width: 200px;
    border: 1px solid #333;
    font-size: 1.2rem;
    margin: 5px 0;
    text-align: left;
    padding: 10px 1rem;
    cursor: pointer;
}
.logout__btn{
    position: absolute;
    bottom: 2rem;
}
</style>