<template>
    <div class="about">
        <div class="about-text">
            <div class="green-line"></div>
            <h1>Ландшафтный дизайн и благоустройство земельных участков</h1>
        </div>
        <div class="down-text">
            <span>Обсудим и подберем дизайн в соответствии<br>с Вашими пожеланиями!</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderAbout"
    }
</script>

<style scoped>
.about {
    max-width: 1000px;
    margin: auto;
    margin-bottom: 65px;
}
h1 {
    margin-left: 10px;
    width: 505px;
}
.green-line {
    width: 5px;
    height: 130px;
    background-color: #22AA22;
}
.about-text {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: white;
}
.down-text {
    width: 320px;
    font-size: 16px;
    color: white;
}

@media screen and (min-width: 1920px) {
    .about {
        max-width: 1200px;
        margin-bottom: 100px;
    }
    .about-text > h1 {
        font-size: 38px;
    }
    .down-text {
        width: 420px;
        font-size: 20px;
    }
}
@media screen and (max-width: 1024px) {
    .about {
        max-width: 850px;
    }
}
@media screen and (max-width: 900px) {
    .about {
        margin-top: 130px;
        margin-bottom: 35px;
    }
    .about-text {
        justify-content: center;
        text-align: center;
    }
    .about-text > h1 {
        margin-left: 0;
        border-bottom: 6px solid #22AA22;
    }
    .green-line {
        display: none;
    }
    .down-text {
        width: auto;
        display: flex;
        justify-content: center;
        text-align: center;
    }
}
@media screen and (max-width: 600px) {
    .about-text > h1 {
        font-size: 23px;
        width: 400px;
    }
    .down-text {
        font-size: 14px;
    }
    .about {
        margin-top: 100px;
    }
}
@media screen and (max-width: 400px) {
    .about-text > h1 {
        font-size: 19px;
        width: 300px;
    }
    .down-text {
        font-size: 13px;
    }
    .about {
        margin-top: 90px;
    }
}
</style>