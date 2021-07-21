<template>
    <div>
        <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.09461524546!2d39.4755376197551!3d52.58598259095129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413a6c9aef3367e3%3A0xa2ed53c1fbc48d71!2z0YPQuy4g0JDQvdCz0LDRgNGB0LrQsNGPLCAzMCwg0JvQuNC_0LXRhtC6LCDQm9C40L_QtdGG0LrQsNGPINC-0LHQuy4sIDM5ODkwMg!5e0!3m2!1sru!2sru!4v1594580954453!5m2!1sru!2sru" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</template>

<script>
    export default {
        name: "HomeMap"
    }
</script>

<style scoped>
.map {
    width: 100%;
    height: 450px;
}
@media screen and (max-width: 900px) {
    .map {
        width: 100%;
        height: 300px;
    }
}
@media screen and (max-width: 600px) {
    .map {
        width: 100%;
        height: 500px;
    }
}
@media screen and (max-width: 375px) {
    .map {
        width: 100%;
        height: 500px;
    }
}
</style>