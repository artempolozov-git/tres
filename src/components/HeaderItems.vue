<template>
    <div class="header-items">
        <div class="case">
            <div @click="toggleForm" class="button">Оставить заявку</div>
            <div class="items">
                <div class="icon"><img src="@/assets/images/icons/garantia.svg"></div>
                <div class="icon-text">Гарантия на все<br>виды услуг</div>
                <div class="next-icon"><img src="@/assets/images/icons/tenyears.svg"></div>
                <div class="icon-text">Более 10 лет<br>опыта работы</div>
                <div class="next-icon"><img src="@/assets/images/icons/professionalworker.svg"></div>
                <div class="icon-text">Высокий профессионализм<br>сотрудников</div>
            </div>
        </div>
        <div class="button-text">Оставьте заявку на сайте и получите<br>бесплатную консультацию уже сегодня!</div>
        <div class="arrow-down" v-scroll-to="'#about-block'"><img src="@/assets/images/icons/arrowdown.svg"></div>
    </div>
</template>

<script>
    export default {
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        name: "HeaderItems"
    }
</script>

<style scoped>
.header-items {
    max-width: 1000px;
    margin: auto;
}
.case {
    display: flex;
    align-items: center;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    width: 160px;
    height: 40px;
    margin-right: 120px;
    background-color: #22AA22;
    transition: background-color .2s ease-in;
    cursor: pointer;
}
.button:hover {
    background-color: #239223;
    transition: background-color .2s ease-in;
}
.button::selection {
    outline: none;
    background: transparent;
}
.button-text {
    width: 300px;
    margin-top: 10px;
    font-size: 16px;
    color: white;
}
.items {
    display: flex;
    align-items: center;
}
.icon {
    width: 50px;
    height: auto;
}
.next-icon {
    margin-left: 30px;
    width: 50px;
    height: auto;
}
.icon-text {
    font-size: 16px;
    width: auto;
    color: white;
    margin-left: 15px;
}
.arrow-down {
    width: 20px;
    cursor: pointer;
    margin: auto;
    margin-top: 10px;
}

@media screen and (min-width: 1920px) {
    .header-items {
        max-width: 1200px;
    }
    .button-text {
        width: 400px;
        font-size: 20px;
        margin-top: 20px;
    }
    .button {
        margin-right: 160px;
        font-size: 20px;
        height: 50px;
        width: 225px;
    }
    .icon {
        width: 60px;
    }
    .next-icon {
        width: 60px;
    }
    .icon-text {
        font-size: 20px;
    }
    .arrow-down {
        margin-top: 40px;
        margin-bottom: 40px;
    }
}
@media screen and (max-width: 1024px) {
    .header-items {
        max-width: 850px;
    }
    .button {
        margin-right: 40px;
    }
    .next-icon {
        margin-left: 20px;
    }
}
@media screen and (max-width: 900px) {
    .items {
        display: none;
    }
    .case {
        justify-content: center;
    }
    .button {
        margin-right: 0;
    }
    .button-text {
        width: auto;
        justify-content: center;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 25px;
    }
    .arrow-down {
        display: none;
    }
}
@media screen and (max-width: 600px) {
    .button {
        width: 145px;
        height: 35px;
        font-size: 14px;
    }
    .button-text {
        font-size: 14px;
        margin-bottom: 25px;
    }
}
@media screen and (max-width: 375px) {
    .button {
        width: 135px;
        height: 35px;
        font-size: 13px;
    }
    .button-text {
        font-size: 13px;
        margin-bottom: 25px;
    }
}
</style>