<template>
    <div>
    <div style="height: 30px" id="contacts-block"></div>
    <div class="main-container">
        <div class="caption">
            <span class="title">Контакты</span>
            <p class="subtitle">Свяжитесь с нами и получите бесплатную консультацию по ландшафтному дизайну<br>
            от наших квалифицированных специалистов.</p>
        </div>
        <div class="contacts">
            <div class="contact">
                <div class="address">
                    <div class="items">
                        <div class="icon"><img src="@/assets/images/icons/address.svg"></div>
                        <div class="icon-text">
                            <div class="icon-title">Адрес</div>
                            <div class="icon-subtitle">398532, Липецк, ул. Ангарская, 30/ вл.2</div>
                        </div>
                    </div>
                </div>
                <div class="phone">
                    <div class="items">
                        <div><img class="icon-phone" src="@/assets/images/icons/telephone.svg"></div>
                        <div class="icon-text">
                            <div class="icon-title">Телефон</div>
                            <div class="icon-subtitle">+7 915 852 44 01 <span> / </span> +7 (4742) 713 714</div>
                        </div>
                    </div>
                </div>
                <div class="email"><div class="items">
                    <div><img class="icon-mail" src="@/assets/images/icons/mail.svg"></div>
                    <div class="icon-text">
                        <div class="icon-title">Email</div>
                        <div class="icon-subtitle">karevm@ya.ru <span> / </span> tresltd@ya.ru</div>
                    </div>
                </div></div>
            </div>
            <div class="feedbackform wow animate__zoomInUp">
                <div class="fb-title">Оставьте заявку на сайте</div>
                <div class="fb-subtitle">Оставьте заявку на сайте и получите<br>бесплатную консультацию уже сегодня!</div>
                <form id="feedback-form" action="https://formspree.io/mvowvvwj" method="POST" class="form-group">
                    <input name="name" type="text" placeholder="Ваше имя" class="input-form" required>
                    <input name="number" type="number" placeholder="Номер телефона" class="input-phone" required>
                    <input type="submit" id="my-form-button" class="button-complete" value="Отправить заявку">
                    <span class="status-complete" id="my-form-status"></span>
                    <!--<div type="submit" id="my-form-button" class="button">Отправить заявку</div> !-->
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "HomeContacts",
        components: {
        },
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        mounted() {

            // get the form elements defined in your form HTML above

            var form = document.getElementById("feedback-form");
            var button = document.getElementById("my-form-button");
            var status = document.getElementById("my-form-status");

            // Success and Error functions for after the form is submitted

            function success() {
                form.reset();
                button.style = "display: none ";
                status.innerHTML = "Спасибо, мы скоро Вам перезвоним!";
            }

            function error() {
                status.innerHTML = "Произошла ошибка при отправке!";
            }

            // handle the form submission event
            console.log(form)
            form.addEventListener("submit", function(ev) {
                ev.preventDefault();
                var data = new FormData(form);
                ajax(form.method, form.action, data, success, error);
            });


            // helper function for sending an AJAX request

            function ajax(method, url, data, success, error) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    if (xhr.status === 200) {
                        success(xhr.response, xhr.responseType);
                    } else {
                        error(xhr.status, xhr.response, xhr.responseType);
                    }
                };
                xhr.send(data);
            }
        }
    };
</script>

<style scoped>
.wow {
    animation: zoomInUp;
    animation-duration: 2s;
}
.main-container {
    max-width: 1000px;
    margin: auto;
}
.caption {
    display: block;
}
.title {
    font-size: 20px;
    font-weight: bold;
    color: #171C16;
    border-bottom: 4px solid #22AA22;
}
.subtitle {
    color: #171C16;
}
.contacts {
    margin-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contact {
    width: 50%;
}
.address {
    width: 100%;
    margin-bottom: 25px;
}
.phone {
    width: 100%;
    margin-bottom: 25px;
}
.email {
    width: 100%;
}
.items {
    display: flex;
    align-items: center;
}
.icon {
    width: 32px;
    height: auto;
}
.icon-phone {
    width: 35px
}
.icon-mail {
    width: 35px
}
.icon-text {
    margin-left: 10px;
}
.icon-title {
    font-weight: bold;
    font-size: 18px;
}
.icon-subtitle {
    font-size: 16px;
}
.icon-subtitle > span {
    font-weight: bold;
    color: #22AA22;
    font-size: 16px;
}
.feedbackform {
    width: 37%;
    height: 355px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15), 0 4px 22px hsla(0, 0%, 0%, 0.12);
}
.fb-title {
    text-align: center;
    margin-top: 30px;
    font-size: 16px;
    font-weight: bold;
}
.fb-subtitle {
    text-align: center;
    font-size: 16px;
}
.form-group {
    margin-top: 30px;
}
.form-group input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.input-form {
    display: flex;
    margin: auto;
    margin-bottom: 30px;
    padding: 0 15px;
    height: 40px;
    width: 230px;
    font-family: UniNeue;
    color: #171C16;
    font-size: 16px;
    border: 1px solid rgba(23, 28, 22, 0.71);
    background-color: transparent;
}
.input-form:focus {
    outline: none;
}
.input-form::-webkit-input-placeholder {
    color: rgba(23, 28, 22, 0.71);
    font-family: UniNeue;
}
.input-phone {
    display: flex;
    margin: auto;
    margin-bottom: 30px;
    padding: 0 15px;
    height: 40px;
    width: 230px;
    font-family: UniNeue;
    color: #171C16;
    font-size: 16px;
    border: 1px solid rgba(23, 28, 22, 0.71);
    background-color: transparent;
}
.input-phone:focus {
    outline: none;
}
.input-phone::-webkit-input-placeholder {
    color: rgba(23, 28, 22, 0.71);
    font-family: UniNeue;
}
.input-phone:focus {
    outline: none;
}
.input-phone::-ms-clear {
    display: none;
}
.input-phone::-webkit-search-cancel-button {
    display: none;
}
.button-complete {
    width: 45%;
    margin: auto;
    height: 45px;
    text-align: center;
    color: white;
    font-size: 16px;
    font-family: UniNeue;
    font-weight: bold;
    background-color: #22AA22;
    border: none;
    transition: background-color 0.2s ease-in;
}
.button-complete:hover {
    background-color: #239223;
    cursor: pointer;
    outline: none;
    transition: background-color 0.2s ease-in;
}
.button-complete::selection {
    outline: none;
    background: transparent;
}
.button-complete:focus {
    outline: none;
}
.status-complete {
    margin-top: 15px;
    font-size: 16px;
    text-align: center;
    font-family: "Uni Neue";
    font-weight: bold;
    color: #22AA22;
}

@media screen and (min-width: 1920px) {
    .main-container {
        max-width: 1200px;
        margin-top: 30px;
    }
    .title {
        font-size: 23px;
    }
    .subtitle {
        font-size: 20px;
    }
    .icon-title {
        font-size: 20px;
    }
    .icon-subtitle {
        font-size: 20px;
    }
    .feedbackform {
        height: 450px;
        padding-top: 35px;
        width: 39%;
    }
    .fb-title {
        font-size: 23px;
    }
    .fb-subtitle {
        font-size: 20px;
    }
    .input-form {
        height: 45px;
        width: 290px;
        font-size: 20px;
    }
    .input-phone {
        height: 45px;
        width: 290px;
        font-size: 20px;
    }
    .button-complete {
        font-size: 20px;
        height: 50px;
        width: 225px;
    }
}
@media screen and (max-width: 1024px) {
    .caption {
        max-width: 850px;
        margin: auto;
    }
}
@media screen and (max-width: 900px) {
    .caption {
        text-align: center;
        margin-bottom: 30px;
    }
    .feedbackform {
        width: 45%;
    }
    .contact {
        width: 45%;
    }
}
@media screen and (max-width: 800px) {
    .feedbackform {
        display: none;
    }
}
@media screen and (max-width: 600px) {
    .main-container {
        max-width: 500px;
    }
    .title {
        font-size: 16px;
    }
    .subtitle {
        font-size: 14px;
        max-width: 400px;
        margin: auto;
        margin-top: 15px;
    }
    .icon-title {
        font-size: 16px;
    }
    .icon-subtitle {
        font-size: 14px;
    }
    .icon {
        width: 23px;
    }
    .icon-phone {
        width: 28px;
    }
    .icon-mail {
        width: 28px;
    }
    .contact {
        width: 60%;
    }
}
@media screen and (max-width: 375px) {
    .main-container {
        max-width: 500px;
    }
    .title {
        font-size: 15px;
    }
    .subtitle {
        font-size: 13px;
        max-width: 330px;
        margin: auto;
        margin-top: 15px;
    }
    .icon-title {
        font-size: 15px;
    }
    .icon-subtitle {
        font-size: 13px;
    }
    .icon {
        width: 20px;
    }
    .icon-phone {
        width: 24px;
    }
    .icon-mail {
        width: 24px;
    }
    .contact {
        width: 75%;
    }
}
</style>