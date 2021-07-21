<template>
    <div class="substrate">
        <div class="views">
            <div class="two-badges">
                <div class="wow animate__fadeInLeft">
                    <div class="badges"><img src="@/assets/images/icons/kompleksrabot.svg"></div>
                    <div class="badges-text">Полный комплекс работ<br>по ландшафтному дизайну</div>
                </div>
                <div class="space wow animate__fadeInLeft">
                    <div class="next-badges"><img src="@/assets/images/icons/podborrasteni.svg"></div>
                    <div class="next-text">Профессиональный<br>подбор растений</div>
                </div>
            </div>
            <div class="two-badges">
                <div class="space-left wow animate__fadeInLeft">
                    <div class="next-badges"><img src="@/assets/images/icons/vystanovlenyusrok.svg"></div>
                    <div class="next-text">Реализация проекта<br>в установленный срок</div>
                </div>
                <div class="space wow animate__fadeInLeft">
                    <div class="next-badges"><img src="@/assets/images/icons/individualno.svg"></div>
                    <div class="next-text">Индивидуальный подход<br>к каждому клиенту</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeBadges",
    }
</script>

<style scoped>
.wow {
    animation: fadeInLeft;
    animation-duration: 2s;
}
.substrate {
    display: flex;
    width: 100%;
    height: 300px;
    background: url(../assets/images/greentree.svg);
    background-size: cover;
    background-position: center;
}
.views {
    display: flex;
    align-items: baseline;
    max-width: 1000px;
    margin: auto;
}
.two-badges {
    display: flex;
    margin-right: 50px;
}
.badges {
    width: 100px;
    margin: auto;
}
.badges-text{
    text-align: center;
    color: white;
    font-weight: bold;
}
.next-text{
    text-align: center;
    color: white;
    font-weight: bold;
}
.next-badges {
    width: 100px;
    margin: auto;
}
.space {
    margin-left: 50px;
}

@media screen and (min-width: 1920px) {
    .views {
        max-width: none;
    }
    .substrate {
        height: 400px;
    }
    .space {
        margin-left: 60px;
    }
    .badges {
        width: 125px;
    }
    .next-badges {
        width: 125px;
    }
    .badges-text {
        width: 250px;
        font-size: 20px;
    }
    .next-text {
        width: 250px;
        font-size: 20px;
    }
}
@media screen and (max-width: 900px) {
    .views {
        justify-content: center;
        align-items: center;
    }
    .substrate {
        height: 420px;
    }
    .two-badges {
        display: block;
        margin-right: 15px;
        margin-left: 15px;
    }
    .space {
        margin-left: 0;
        margin-top: 40px;

    }
}
@media screen and (max-width: 600px) {
    .views {
        max-width: 500px;
    }
    .substrate {
        height: 380px;
    }
    .badges {
        width: 80px;
    }
    .next-badges {
        width: 80px;
    }
    .badges-text {
        font-size: 14px;
    }
    .next-text {
        font-size: 14px;
    }
}
@media screen and (max-width: 375px) {
    .views {
        max-width: 400px;
    }
    .substrate {
        height: 380px;
    }
    .badges {
        width: 70px;
    }
    .next-badges {
        width: 70px;
    }
    .badges-text {
        font-size: 13px;
    }
    .next-text {
        font-size: 13px;
    }
}
</style>