<template>
    <div class="home">
        <home-about></home-about>
        <home-badges></home-badges>
        <home-services></home-services>
        <home-feedback></home-feedback>
        <home-slider></home-slider>
        <home-work></home-work>
        <home-contacts></home-contacts>
        <home-map></home-map>
    </div>
</template>

<script>
    import HomeAbout from "@/components/HomeAbout";
    import HomeBadges from "@/components/HomeBadges";
    import HomeServices from "@/components/HomeServices";
    import HomeFeedback from "@/components/HomeFeedback";
    import HomeSlider from "@/components/HomeSlider";
    import HomeWork from "@/components/HomeWork";
    import HomeContacts from "@/components/HomeContacts";
    import HomeMap from "@/components/HomeMap";
    export default {
        name: "Home",
        components: {HomeMap, HomeContacts, HomeWork, HomeSlider, HomeFeedback, HomeServices, HomeBadges, HomeAbout}
    }
</script>

<style scoped>
.home {

}
</style>