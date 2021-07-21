<template>
    <div style="display: flex">
        <div class="links">
            <div>Ландшафтное проектирование</div>
            <div>Благоустройство и озеленение территории</div>
            <div>Посадка и продажа крупномеров</div>
            <div>Аренда техники и доставка сыпучих материалов</div>
        </div>
        <div class="links">
            <div>Продажа растений из питомника</div>
            <div>Система полива и освещение участка</div>
            <div>Устройство газонов на участке</div>
            <div>Обслуживание и уход за территорией</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FooterLinks"
    }
</script>

<style scoped>
.links {
    width: 230px;
    margin-left: 60px;
}
.links > div {
    margin-bottom: 10px;
    color: white;
}
@media screen and (min-width: 1920px) {
    .links {
        width: 300px;
        margin-left: 60px;
        font-size: 18px;
    }
}
@media screen and (max-width: 1024px) {
    .links {
        width: 200px;
        margin-left: 35px;
    }
}
@media screen and (max-width: 900px) {
    .links {
        display: none;
    }
}
</style>