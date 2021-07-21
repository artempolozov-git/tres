<template>
    <div class="main-footer">
        <div class="footer">
            <div>
                <img class="logo-footer" src="@/assets/images/logowhite.png">
                <div class="number-phone">+7 915 852 44 01</div>
                <div class="email">tresltd@ya.ru</div>
                <div title="Наверх" class="arrow-up" v-scroll-to="'#start'"><img src="@/assets/images/icons/arrowup.svg"></div>
            </div>
            <footer-links></footer-links>
            <footer-button></footer-button>
        </div>
    </div>
</template>

<script>
    import FooterLinks from "@/components/FooterLinks";
    import FooterButton from "@/components/FooterButton";
    export default {
        name: "Footer",
        components: {FooterButton, FooterLinks}
    }
</script>

<style scoped>
.main-footer {
    width: 100%;
    height: 280px;
    background-color: #171C16;
}
.footer {
    display: flex;
    max-width: 1000px;
    margin: auto;
    padding-top: 40px;
}
.logo-footer {
    height: 55px;
    margin-bottom: 15px;
}
.number-phone {
    font-size: 16px;
    color: white;
}
.email {
    font-size: 16px;
    color: white;
}
.arrow-up > img {
    width: 50px;
    margin-top: 20px;
    cursor: pointer;
}
@media screen and (min-width: 1920px) {
    .main-footer {
        height: 340px;
    }
    .footer {
        max-width: 1200px;
        padding-top: 65px;
    }
    .logo-footer {
        height: 65px;
    }
    .number-phone {
        font-size: 20px;
    }
    .email {
        font-size: 20px;
    }
}
@media screen and (max-width: 1024px) {
    .footer {
        max-width: 850px;
    }
}
@media screen and (max-width: 900px) {
    .footer {
        justify-content: center;
    }
    .main-footer {
        height: 245px;
    }
    .arrow-up > img {
        width: 40px;
    }
}
@media screen and (max-width: 600px) {
    .logo-footer {
        height: 45px;
    }
    .number-phone {
        font-size: 14px;
    }
    .email {
        font-size: 14px;
    }
    .arrow-up > img {
        width: 45px;
    }
}
@media screen and (max-width: 375px) {
    .logo-footer {
        height: 40px;
    }
    .number-phone {
        font-size: 13px;
    }
    .email {
        font-size: 13px;
    }
    .arrow-up > img {
        width: 40px;
    }
}
</style>