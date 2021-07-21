<template>
    <div class="footer-button">
        <div class="form-button">
            <div @click="toggleForm" class="button">Оставить заявку</div>
        </div>
        <div class="footer-links">
            <div class="link" v-scroll-to="'#about-block'">О компании</div>
            <div class="link" v-scroll-to="'#slider-block'">Портфолио</div>
        </div>
        <div class="footer-links">
            <div class="link" v-scroll-to="'#services-block'">Услуги</div>
            <div class="link" v-scroll-to="'#contacts-block'">Контакты</div>
        </div>
        <div class="link-bio"><a href="https://vk.com/artpolozov">Разработка сайта - @artpolozov</a></div>
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

        name: "FooterButton"
    }
</script>

<style scoped>
.footer-button {
    width: 100%;
}
.form-button {
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
}
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
    color: white;
    font-size: 16px;
    font-weight: bold;
    width: 160px;
    height: 40px;
    border: 1px solid white;
    cursor: pointer;
}
.button::selection {
    background: transparent;
}
.footer-links {
    display: flex;
    justify-content: flex-end;
}
.link {
    width: 40%;
    margin-bottom: 15px;
    text-align: right;
    color: white;
    cursor: pointer;
}
.link::selection {
    background: transparent;
}
.link-bio {
    width: 100%;
    height: 30px;
    margin-top: 15px;
    text-align: right;
}
.link-bio > a {
    text-decoration: none;
    color: #4c574b;
}

@media screen and (min-width: 1920px) {
    .button {
        font-size: 18px;
        height: 50px;
        width: 225px;
    }
    .link {
        font-size: 18px;
        width: 50%;
    }
    .link-bio {
        font-size: 18px;
    }
}
@media screen and (max-width: 900px) {
    .footer-button {
        width: auto;
    }
}
@media screen and (max-width: 600px) {
    .button {
        width: 145px;
        height: 35px;
        font-size: 14px;
    }
    .link {
        font-size: 14px;
    }
    .link-bio {
        font-size: 14px;
    }
}
@media screen and (max-width: 375px) {
    .button {
        width: 135px;
        height: 35px;
        font-size: 13px;
    }
    .link {
        font-size: 13px;
    }
    .link-bio {
        font-size: 13px;
    }
}
</style>