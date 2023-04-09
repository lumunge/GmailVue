<template>
    <h2 class="heading">{{ useEmail.currentView }}</h2>
    <h1>Emails Selected(2)</h1>
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
.heading{
    padding: 1rem 0;
}
</style>