<template>
    <header>
        <label class="checkbox__container">
            <input type="checkbox" v-bind:checked="useEmail.allSelected" @click="useEmail.selectAllEmails">
            <span class="checkmark"></span>
        </label>
        <div>
        <button @click="useEmail.markAsRead">Mark as read(r)</button>
        <button @click="useEmail.markAsArchived">Archive(a)</button>
        </div>
    </header>

    <main>
      <div v-if="useEmail.currentView === 'Inbox'">
        <div 
        :class="{'email__container': true, 'read__email': email.isRead}" 
        v-for="email in useEmail.emails" :key="email.id" 
        >
        <div class="left__container">
            <label class="checkbox__container">
                <input type="checkbox" v-bind:checked="email.isSelected" :value="email.isSelected" @change="useEmail.selectEmail(email.id)">
                <span class="checkmark"></span>
            </label>
          </div>
            <span class="email__content" @click="useEmail.setShowLeftSideBar(email.id); useEmail.readEmail(email.id)">{{ email.title }}</span>
            <p> | {{ useEmail.isRead(email.id) }}</p>
        </div>
      </div>
      <div v-if="useEmail.currentView === 'Archive'">
        <div 
        :class="{'email__container': true, 'read__email': email.isRead}" 
        v-for="email in useEmail.archivedEmails" :key="email.id" 
        >
        <div class="left__container">
            <label class="checkbox__container">
                <input type="checkbox" v-bind:checked="email.isSelected" :value="email.isSelected" @change="useEmail.selectEmail(email.id)">
                <span class="checkmark"></span>
            </label>
          </div>
            <span class="email__content" @click="useEmail.setShowLeftSideBar(email.id); useEmail.readEmail(email.id)">{{ email.title }}</span>
            <p> | {{ useEmail.isRead(email.id) }}</p>
        </div>
      </div>
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
header{
    padding: 2rem 0;
    display: flex;
    align-items: center;
}
button{
    border-radius: 5px;
    min-width: 100px;
    border: 1px solid #333;
    font-size: 1.2rem;
    margin: 5px 10px;
    text-align: left;
    padding: 10px .5rem;
    cursor: pointer;
}

/* checkbox styling */
.checkbox__container {
  display: block;
  position: relative;
  cursor: pointer;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding-left: 35px;
  margin-bottom: 20px;
}

/* Hide default checkbox */
.checkbox__container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  z-index: 99;
}

.checkbox__container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* blue background on checked */
.checkbox__container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* checkmark */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* show checkmark*/
.checkbox__container input:checked ~ .checkmark:after {
  display: block;
}

/* Style checkmark */
.checkbox__container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* email content */
.email__container{
    background-color: #B9BBB6;
    color: #333;
    padding: 1.5rem 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
    border-radius: 10px;
}

.read__email{
  opacity: 0.5;
}

.email__content{
  cursor: pointer;
}

</style>