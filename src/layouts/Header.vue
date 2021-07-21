<template>
    <div class="main-container">
        <div class="bg-image">
            <header-menu></header-menu>
            <header-caption></header-caption>
            <header-items></header-items>
        </div>
    </div>
</template>

<script>
    import HeaderCaption from "@/components/HeaderCaption";
    import HeaderItems from "@/components/HeaderItems";
    import HeaderMenu from "@/components/HeaderMenu";
    export default {
        name: "Header",
        components: {HeaderMenu, HeaderItems, HeaderCaption}
    }
</script>

<style scoped>
.main-container {
    display: flex;
    justify-content: center;
}
.bg-image {
    width: 100%;
    height: 100vh;
    background: url(../assets/images/first-screen.jpg);
    background-size: cover;
    background-position: center;
}
@media screen and (min-width: 1920px) {
    .bg-image {
        height: auto;
    }
}
@media screen and (max-width: 600px) {
    .bg-image {
        height: auto;
    }
}
@media screen and (max-width: 500px) {
    .bg-image {
        height: auto;
    }
}
@media screen and (max-width: 400px) {
    .bg-image {
        height: auto;
    }
}
@media screen and (max-width: 375px) {
    .bg-image {
        height: auto;
    }
}
</style>