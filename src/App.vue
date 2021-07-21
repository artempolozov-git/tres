<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <Feedback></Feedback>
    <router-view name="footer"></router-view>
    <phone-button></phone-button>
  </div>
</template>
<script>
  import Feedback from "./components/Feedback";
  import PhoneButton from "@/components/PhoneButton";

  export default {
    components: {
      PhoneButton,
      Feedback
    },
    computed: {
      defaultViewKey: function() {
        return this.$route.name;
      }
    }
  }
</script>
<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
  }
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v53/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }
  @font-face {
    font-family: UniNeue;
    src: url('./assets/UniNeueBold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: UniNeue;
    src: url('./assets/UniNeueRegular.ttf');
    font-weight: normal;
  }
  body {
    font-family: UniNeue;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>