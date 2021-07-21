<template>
    <div id="about-block">
        <div class="case">
            <div class="content">
                <div class="title"><span>О Компании</span></div>
                <p class="subtitle">Компания «ТРЕС» приветствует Вас в мире прекрасных ландшафтов и роскошных садов!</p>
                <p class="description">Мы предлагаем Вам полный комплекс работ по ландшафтному дизайну и благоустройству
                    земельных участков, начиная от разработки дизайн-проекта, и заканчивая его безукоризненной реализацией.
                    Работы производятся на участках от 10 соток до нескольких гектаров. С первой встречи Вас ждет серьезный
                    профессиональный подход.</p>
            </div>
            <div class="pictures wow"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeAbout"
    }
</script>

<style scoped>
.case {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
    height: 325px;
}
.content {
    width: 80%;
}
.title {
    display: flex;
    align-items: center;
}
.title > span{
    font-size: 20px;
    font-weight: bold;
    color: #171C16;
    border-bottom: 4px solid #22AA22;
}
.subtitle {
    margin-top: 15px;
    font-weight: bold;
    color: #171C16;
}
.description {
    color: #171C16;
    font-weight: normal;
    margin-top: 15px;
}
.pictures {
    width: 205px;
    height: 236px;
    background: url(../assets/images/flowerpot.jpg);
    background-size: cover;
    background-position: center;
}

@media screen and (min-width: 1920px) {
    .case {
        max-width: 1200px;
        height: 400px;
    }
    .title > span {
        font-size: 23px;
    }
    .subtitle {
        font-size: 20px;
    }
    .description {
        font-size: 20px;
    }
    .pictures {
        width: 245px;
        height: 290px;
        margin-left: 40px;
    }
}
@media screen and (max-width: 1024px) {
    .case {
        max-width: 850px;
    }
}
@media screen and (max-width: 900px) {
    .case {
        max-width: 750px;
        display: block;
        height: 430px;
        margin-top: 20px;
    }
    .content {
        width: 100%;
        text-align: center;
    }
    .title {
        justify-content: center;
    }
    .pictures {
        margin: auto;
    }
}
@media screen and (max-width: 600px) {
    .case {
        max-width: 500px;
        height: 395px;
    }
    .title >span {
        font-size: 16px;
    }
    .subtitle {
        font-size: 14px;
    }
    .description {
        font-size: 14px;
    }
    .pictures {
        width: 149px;
        height: 179px;
    }
}
@media screen and (max-width: 375px) {
    .case {
        max-width: 450px;
        height: 395px;
    }
    .title >span {
        font-size: 15px;
    }
    .subtitle {
        font-size: 13px;
    }
    .description {
        font-size: 13px;
        margin-left: 15px;
        margin-right: 15px;
    }
    .pictures {
        width: 130px;
        height: 155px;
    }
}
</style>