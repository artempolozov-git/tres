<template>
    <div class="nav-menu" id="start">
        <img class="logo" src="@/assets/images/logo.png">
        <div class="links-wrap">
            <div class="link" v-scroll-to="'#about-block'">О компании</div>
            <div class="links" v-scroll-to="'#services-block'">Услуги</div>
            <div class="links" v-scroll-to="'#slider-block'">Портфолио</div>
            <div class="links" v-scroll-to="'#contacts-block'">Контакты</div>
        </div>
        <div>
            <div class="number-phone"><a href="tel:+79158524401">+7 915 852 44 01</a></div>
            <div class="email">tresltd@ya.ru</div>
        </div>
        <home-burger></home-burger>
    </div>
</template>

<script>
    import HomeBurger from "@/components/HomeBurger";
    export default {
        name: "HeaderMenu",
        components: {HomeBurger},
    }
</script>

<style scoped>
.nav-menu {
    display: flex;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    justify-content: center;
    padding-top: 10px;
    margin-bottom: 30px;
    width: 100%;
    height: 100px;
}
.logo {
    height: 55px;
}
.links-wrap {
    display: flex;
    margin: auto;
}
.links {
    font-size: 16px;
    color: white;
    margin-left: 60px;
    cursor: pointer;
}
.links::selection {
    background: transparent;
}
.link {
    font-size: 16px;
    color: white;
    cursor: pointer;
}
.link::selection {
    background: transparent;
}
.number-phone {
    font-size: 18px;
    font-weight: bold;
    color: white;
}
.number-phone > a {
    text-decoration: none;
    color: white;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.email {
    font-size: 18px;
    color: #22AA22;
    font-weight: bold;
    text-align: right;
}

@media screen and (min-width: 1920px) {
    .nav-menu {
        max-width: 1200px;
        padding-top: 50px;
        margin-bottom: 80px;
    }
    .logo {
        height: 65px;
    }
    .links {
        font-size: 20px;
    }
    .number-phone {
        font-size: 23px;
        margin-left: 0;
    }
    .email {
        font-size: 23px;
    }
}
@media screen and (max-width: 1024px) {
    .nav-menu {
        max-width: 850px;
    }
}
@media screen and (max-width: 900px) {
    .nav-menu {
        display: block;
        padding-top: 40px;
    }
    .logo {
        margin: auto;
        display: flex;
    }
    .links-wrap {
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .number-phone {
        text-align: center;
        margin-top: 30px;
    }
    .email {
        text-align: center;
    }
}
@media screen and (max-width: 600px) {
    .nav-menu {
        padding-top: 25px;
    }
    .logo {
        height: 45px;
    }
    .link {
        font-size: 14px;
    }
    .links {
        font-size: 14px;
        margin-left: 45px;
    }
    .number-phone {
        font-size: 17px;
    }
    .email {
        font-size: 17px;
    }
}
@media screen and (max-width: 400px) {
    .nav-menu {
        padding-top: 20px;
    }
    .logo {
        height: 40px;
    }
    .link {
        font-size: 13px;
    }
    .links {
        font-size: 13px;
        margin-left: 30px;
    }
    .number-phone {
        font-size: 17px;
    }
    .email {
        font-size: 17px;
    }
}
@media screen and (max-width: 375px) {
    .links {
        margin-left: 25px;
    }
}
</style>