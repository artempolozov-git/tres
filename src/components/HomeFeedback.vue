<template>
    <div class="bg-line">
        <div class="form-wrap">
            <div class="main-text">
                <span class="heading">Доверьте нам воплотить участок вашей мечты!</span>
                <span class="subhead">Отправьте заявку, мы перезвоним вам и обсудим ваш проект</span>
            </div>
            <form id="feedback-form" action="https://formspree.io/mvowvvwj" method="POST" class="form-case">
                <div class="input-group">
                    <input name="name" type="text" placeholder="Ваше имя" class="input-form" required>
                    <input name="number" type="number" placeholder="Номер телефона" class="input-phone" required>
                </div>
                <input type="submit" id="my-form-button" class="button-complete" value="Отправить заявку">
                <span class="status-complete" id="my-form-status"></span>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeFeedback",
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
.bg-line {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 250px;
    background: url(../assets/images/feedbackline.jpg);
    background-size: cover;
    background-position: center;
}
.main-text {
    max-width: 1000px;
    margin: auto;
}
.heading {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 25px;
    color: white;
}
.subhead {
    display: flex;
    justify-content: center;
    font-size: 16px;
    margin-top: 5px;
    color: white;
}
.form-case {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: auto;
    margin-top: 40px;
}
.form-case input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.input-form {
    padding: 0 15px;
    height: 40px;
    width: 200px;
    font-family: UniNeue;
    color: white;
    font-size: 16px;
    border: 1px solid white;
    background-color: transparent;
}
.input-form:focus {
    outline: none;
}
.input-form::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.71);
    font-family: UniNeue;
}
.input-phone {
    padding: 0 15px;
    height: 40px;
    width: 200px;
    font-family: UniNeue;
    color: white;
    font-size: 16px;
    border: 1px solid white;
    background-color: transparent;
    margin-left: 45px;
}
.input-phone:focus {
    outline: none;
}
.input-phone::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.71);
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    width: 175px;
    height: 44px;
    margin-left: 45px;
    background-color: #22AA22;
    transition: background-color .2s ease-in;
    cursor: pointer;
}
.button-complete:hover {
    background-color: #239223;
    cursor: pointer;
    outline: none;
    transition: background-color .2s ease-in;
}
.button-complete::selection {
    outline: none;
    background: transparent;
}
.button-complete:focus {
    outline: none;
}
.status-complete {
    margin-left: 45px;
    font-size: 16px;
    text-align: center;
    font-family: "Uni Neue";
    font-weight: bold;
    color: white;
}

@media screen and (min-width: 1920px) {
    .bg-line {
        height: 350px;
    }
    .heading {
        font-size: 30px;
    }
    .subhead {
        font-size: 20px;
        margin-top: 10px;
    }
    .input-form {
        height: 45px;
        width: 250px;
        font-size: 20px;
    }
    .input-phone {
        height: 45px;
        width: 250px;
        font-size: 20px;
        margin-left: 80px;
    }
    .button-complete {
        font-size: 20px;
        height: 50px;
        width: 225px;
        margin-left: 80px;

    }
}
@media screen and (max-width: 900px) {
    .form-wrap {
        margin-top: 20px;
    }
    .bg-line {
        height: 300px;
    }
    .form-case {
        display: block;
        margin-top: 20px;
    }
    .input-group{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
    }
    .button-complete {
        margin: auto;
    }
}
@media screen and (max-width: 600px) {
    .heading {
        font-size: 18px;
    }
    .subhead {
        font-size: 14px;
    }
    .button-complete {
        width: 145px;
        height: 35px;
        font-size: 14px;
    }
    .input-form {
        width: 180px;
        height: 35px;
        font-size: 14px;
    }
    .input-phone {
        width: 180px;
        height: 35px;
        font-size: 14px;
    }
    .bg-line {
        height: 260px;
    }
}
@media screen and (max-width: 375px) {
    .bg-line {
        display: none;
    }
}
</style>