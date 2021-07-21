<template>
    <div id="feedback" style="display: none;">

        <div class="overlay">

            <form id="feedback-form" action="https://formspree.io/mvowvvwj" method="POST" class="form-wrapper WOW animate__fadeInLeft">

                <div class="button-close">
                    <span style="font-family: HelveticaNeueCyr" class="closebtn" @click="toggleForm">&times;</span>
                </div>

                <div class="form-group">
                    <label class="form-label">Ваше имя:</label>
                    <input name="name" type="text" class="form-input" placeholder="Введите имя" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Ваш телефон:</label>
                    <input name="number" type="number" class="form-input" placeholder="Введите телефон" required>
                </div>

                <div class="form-group">
                    <label class="form-label">Сообщение:</label>
                    <textarea name="message" class="form-message" placeholder="Введите дополнительную информацию"></textarea>
                </div>

                <input type="submit" id="my-form-button" class="form-submit" value="Отправить заявку">
                <span class="form-status" id="my-form-status"></span>
            </form>
        </div>
    </div>
</template>

<script>

    export default {
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

<style>
    .WOW {
        animation: fadeInLeft;
        animation-duration: 1s;
    }
    *{
        box-sizing: border-box;
    }
    .button-close {
        height: 25px;
        text-align: right;
        transition: 0.3s;
        position: absolute;
        z-index: 100;
        right: 15px;
        top: 15px;
    }
    .closebtn {
        color: #171C16;
        font-weight: bold;
        font-size: 40px;
        line-height: 24px;
        cursor: pointer;
        transition: 0.3s;
    }
    .closebtn:hover {
        color: #40453e;
    }
    .closebtn::selection {
        outline: none;
        background: transparent;
    }
    #feedback {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
    }
    .overlay {
        height: 100%;
        width: 530px;
        top: 75px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        overflow: auto;
        z-index: 100;
        position: fixed;
    }
    .form-wrapper {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 40px 49px 40px 49px;
    }
    .form-group {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
    }
    .form-label {
        font-weight: bold;
        font-size: 16px;
        color: #171C16;
        margin-bottom: 10px;
    }
    .form-input {
        padding: 0 15px;
        height: 45px;
        font-family: UniNeue;
        color: #171C16;
        font-size: 16px;
        border: 1px solid rgba(23, 28, 22, 0.71);
        background-color: transparent;
    }
    .form-group input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    .form-input:focus, .form-message:focus {
        outline: none;
    }
    .form-input::-webkit-input-placeholder {
        color: rgba(23, 28, 22, 0.71);
        font-family: UniNeue;
    }
    .form-input::-ms-clear {
        display: none;
    }
    .form-input::-webkit-search-cancel-button {
        display: none;
    }
    .form-message {
        width: 100%;
        height: 150px;
        padding: 15px 15px;
        resize: vertical;
        font-family: UniNeue;
        color: #171C16;
        font-size: 16px;
        border: 1px solid rgba(23, 28, 22, 0.71);
        background-color: transparent;
    }
    .form-submit {
        width: 40%;
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
    .form-submit:hover {
        background-color: #239223;
        cursor: pointer;
        outline: none;
        transition: background-color 0.2s ease-in;
    }
    .form-submit::selection {
        outline: none;
        background: transparent;
    }
    .form-submit:focus {
        outline: none;
    }
    .form-status{
        font-size: 16px;
        text-align: center;
        font-family: "Uni Neue";
        font-weight: bold;
        color: #22AA22;
    }
    .overlay::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    @media screen and (min-width: 1920px) {
        .form-input {
            height: 50px;
            font-size: 18px;
        }
        .form-message {
            height: 170px;
            font-size: 18px;
        }
        .form-submit {
            font-size: 18px;
            height: 50px;
            width: 225px;
        }
        .overlay {
            top: 500px;
        }
    }
    @media screen and (max-width: 600px) {
        .form-submit {
            width: 135px;
            height: 35px;
        }
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
        }
        div .form-label {
            font-size: 13px;
        }
        div .form-input {
            font-size: 13px;
            height: 40px;
        }
        div .form-message {
            font-size: 13px;
            height: 100px;
        }
        div .form-submit {
            font-size: 13px;
            margin: 0;
        }
        div .form-status {
            font-size: 13px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
    @media screen and (max-width: 520px) {
        div .overlay {
            width: 100%;
            top: 0px;
        }
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
        }
        div .form-label {
            font-size: 12px;
        }
        div .form-input {
            font-size: 11px;
            height: 40px;
        }
        div .form-message {
            font-size: 11px;
            height: 100px;
        }
        div .form-submit {
            font-size: 11px;
        }
        div .form-status {
            font-size: 11px;
        }
    }
    @media screen and (max-width: 416px) {
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
        }
        div .form-label {
            font-size: 12px;
        }
        div .form-input {
            font-size: 11px;
            height: 40px;
        }
        div .form-message {
            font-size: 11px;
            height: 100px;
        }
        div .form-submit {
            font-size: 11px;
            margin: 0;
        }
        div .form-status {
            font-size: 11px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
    @media screen and (max-width: 375px) {
        .form-submit {
            width: 135px;
            height: 35px;
        }
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
        }
        div .form-label {
            font-size: 12px;
        }
        div .form-input {
            font-size: 11px;
            height: 40px;
        }
        div .form-message {
            font-size: 11px;
            height: 100px;
        }
        div .form-submit {
            font-size: 11px;
            margin: 0;
        }
        div .form-status {
            font-size: 11px;
        }
        .button-close {
            right: 30px;
            top: 25px;
        }
    }
</style>