<template>
    <div>
        <div style="height: 30px" id="slider-block"></div>
    <div class="view--home">
    <div class="caption-container">
        <span class="main-title">Наше портфолио</span>
        <p class="subtitle">Ознакомьтесь с примерами наших работ:</p>
    </div>
    <div class="slider-container">
        <slick ref="slick" :options="slickOptions">
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/1.jpeg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/2.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/3.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/4.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/5.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/6.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/7.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/8.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/9.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/10.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/11.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/12.jpg" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/13.jpg" alt=""></div>
        </slick>
    </div>
    </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Slider",
        components: { Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    centerMode: true,
                    variableWidth: true,
                    infinite: true,
                    accessibility: true,
                    dots: true,
                    mobileFirst: true,
                    // Any other options that can be got from plugin documentation
                },
            };
        },
        mounted() {
            //let $slider = this.$el.querySelector('.slider');
        },
        methods: {

        },
    }
</script>

<style src='../../node_modules/slick-carousel/slick/slick.css'></style>
<style src='../../node_modules/slick-carousel/slick/slick-theme.css'></style>
<style>
    .view--home {

    }
    .caption-container {
        max-width: 1000px;
        margin: auto;
        display: block;
    }
    .main-title {
        font-size: 20px;
        font-weight: bold;
        color: #171C16;
        border-bottom: 4px solid #22AA22;
    }
    .subtitle {
        color: #171C16;
    }
    .slider-container img {
        height: 500px;
        width: 700px;
        margin-left: 15px;
        object-fit: cover;
    }
    .slider-container .slick-prev {
        left: 12px;
        z-index: 1;
    }
    .slider-container .slick-next {
        right: 20px;
        z-index: 1;
    }
    .slick-slide {
        filter: blur(0);
    }
    .slick-center {
        filter: blur(0);
    }
    .slick-next:before {
        font-size: 25px;
    }
    .slick-prev:before {
        font-size: 25px;
    }
    @media screen and (min-width: 1920px) {
        .slider-container img {
            height: 560px;
            width: 800px;
        }
        .slider-container .slick-next {
            right: 35px;
        }
        .slick-next:before {
            font-size: 40px;
        }
        .slick-prev:before {
            font-size: 40px;
        }
        .caption-container {
            max-width: 1200px;
            margin-top: 25px;
            margin-bottom: 30px;
        }
        .main-title {
            font-size: 23px;
        }
        .subtitle {
            font-size: 20px;
        }
    }
    @media screen and (max-width: 1024px) {
        .caption-container {
            max-width: 850px;
        }
    }
    @media screen and (max-width: 900px) {
        .caption-container {
            text-align: center;
        }
    }
    @media screen and (max-width: 600px) {
        .main-title {
            font-size: 16px;
        }
        .subtitle {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 690px) {
        div .slider-container img {
            height: 400px;
        }
    }
    @media screen and (max-width: 520px) {
        div .slider-container img {
            height: 350px;
            width: 500px;
        }
        .slick-dots li button:before {
            display: none;
        }
    }
    @media screen and (max-width: 416px) {
        div .slider-container img {
            height: 300px;
            width: 450px;
        }
    }
    @media screen and (max-width: 375px) {
        div .slider-container img {
            height: 310px;
            width: 400px;
        }
        .slick-dots {
            display: none;
        }
        .slick-dots li button:before {
            display: none;
        }
        .main-title {
            font-size: 15px;
        }
        .subtitle {
            font-size: 13px;
        }
    }
</style>