<template>
    <main class="container">
    <EmailHeader />
    <EmailContent />
</main>
</template>

<script>
import EmailContent from './EmailContent.vue'
import EmailHeader from './EmailHeader.vue'

export default{
    components: {
        EmailContent,
        EmailHeader
    }
}

</script>

<style>
.container{
    background-color: #fff;
    width: 80%;
    padding: 5rem 5rem;
}
</style>