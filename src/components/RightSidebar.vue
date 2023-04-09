<template>
    <div class="sidebar__container">
    <header class="sidebar__header">
        <div>
            Close(esc)
        </div>
        <div>
            <button>Mark as read(r)</button>
            <button>Archive(a)</button>
        </div>
    </header>
    <main>
        <div>
            <h4>Email Title</h4>
        </div>
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, aspernatur.</p>
        </div>
    </main>
</div>
</template>

<script>

</script>

<style>
.sidebar__container{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-height: 100vh;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
    position: fixed;
    top: 0;
    right: -100%;
    z-index: 1;
    transition: 0.5s;
}
.sidebar__content{
    display: flex;
    flex-direction: column;
}
</style>