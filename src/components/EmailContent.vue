<template>
    <header>
        <label class="checkbox__container">
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
        </label>
        <div>
        <button>Mark as read(r)</button>
        <button>Archive(a)</button>
        </div>
    </header>

    <main>
        <div class="email__container">
            <label class="checkbox__container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
            <span class="email__content">Email One</span>
        </div>
        <div class="email__container">
            <label class="checkbox__container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
            <span class="email__content">Email two</span>
        </div>
        <div class="email__container">
            <label class="checkbox__container">
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>
            <span class="email__content">Email three</span>
        </div>
    </main>
</template>

<script>
export default{
    data(){
        return {
            emails: [
                {id: 1, title: "Email One", content: "Email One Content", isRead: false, isArchive: false},
                {id: 2, title: "Email Two", content: "Email Two Content", isRead: false, isArchive: false},
                {id: 3, title: "Email Three", content: "Email Three Content", isRead: false, isArchive: false},
                {id: 4, title: "Email Four", content: "Email Four Content", isRead: false, isArchive: false},
                {id: 5, title: "Email Five", content: "Email Five Content", isRead: false, isArchive: false},
            ]
        }
    },
    methods: {
        readEmail(){}, // read single email
        markAsRead(){}, // mark single/multiple emails as read
        archiveEmail(){}, // move email to archive

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
    background-color: #333;
    color: #fff;
    padding: 2rem 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
}

</style>