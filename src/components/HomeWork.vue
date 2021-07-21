<template>
    <div class="case">
        <div class="content">
            <p class="subtitle">Мы <span>любим</span> свою работу<br>и выполняем её качественно!</p>
            <p class="description">Многие люди согласны с мыслью, что ландшафтное проектирование можно смело назвать
                настоящим искусством. Такая работа помогает даже на самой запущенной территории создать прекрасные
                цветочные композиции, которые никого не оставят равнодушными. Ландшафтное проектирование помогает
                создать необыкновенный дизайн Вашего парка!</p>
        </div>
        <div class="pictures"></div>
    </div>
</template>

<script>
    export default {
        name: "HomeWork"
    }
</script>

<style scoped>
.case {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    margin-top: 70px;
}
.content {
    width: 80%;
}
.subtitle {
    font-size: 25px;
    font-weight: bold;
    margin: 0px;
    color: #171C16;
}
.subtitle > span {
    color: #22AA22;
}
.description {
    color: #171C16;
    font-weight: normal;
}
.pictures {
    width: 490px;
    height: 236px;
    background: url(../assets/images/gardentools.jpg);
    background-size: cover;
    background-position: center;
}

@media screen and (min-width: 1920px) {
    .case {
        max-width: 1200px;
    }
    .subtitle {
        font-size: 30px;
    }
    .description {
        font-size: 20px;
    }
    .pictures {
        width: 526px;
        height: 280px;
    }
}
@media screen and (max-width: 1024px) {
    .case {
        max-width: 850px;
    }
    .pictures {
        margin-left: 15px;
    }
}
@media screen and (max-width: 900px) {
    .case {
        display: block;
        margin: auto;
    }
    .subtitle {
        text-align: center;
    }
    .content {
        width: 100%;
        margin-top: 60px;
    }
    .description {
        display: none;
    }
    .pictures {
        display: flex;
        justify-content: center;
        margin: auto;
        width: 360px;
    }
}
@media screen and (max-width: 600px) {
    .content {
        margin-top: 0;
    }
    .subtitle {
        font-size: 18px;
    }
    .pictures {
        width: 294px;
        height: 184px;
    }
}
@media screen and (max-width: 375px) {
    .content {
        margin-top: 0;
    }
    .subtitle {
        font-size: 16px;
    }
    .pictures {
        width: 245px;
        height: 165px;
    }
}
</style>