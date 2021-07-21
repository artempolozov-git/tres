<template>
    <div class="phone-button">
        <div class="call-text">
            <img src="@/assets/images/icons/phone-white.svg">
            <a class="call" href="tel:+79158524401">Позвонить</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhoneButton"
    }
</script>

<style scoped>
    .phone-button {
        display: none;
        justify-content: center;
        align-items: center;
        position: sticky;
        bottom: 0;
        width: 100%;
        height: 55px;
        background-color: #22AA22;
    }
    .call-text {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .call-text > img {
        width: 21px;
        height: auto;
    }
    .call {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 18px;
        margin-left: 10px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    @media screen and (max-width: 600px) {
        .phone-button {
            display: flex;
            height: 65px;
        }
        .call-text > img {
            width: 23px;
        }
    }
    @media screen and (max-width: 375px) {
        .phone-button {
            height: 55px;
        }
    }
</style>