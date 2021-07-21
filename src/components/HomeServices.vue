<template>
    <div id="services-block" >
        <div style="height: 30px"></div>
    <div class="caption">
        <div class="headlines">
            <span class="title">Наши услуги</span>
            <p class="subtitle">В области ландшафтного дизайна мы готовы предложить Вам:</p>
        </div>
        <div class="services wow animate__fadeInUp">
            <div class="landscape">
                <div class="subcategory">
                    <div class="category-title">Ландшафтное<br>проектирование</div>
                    <div class="line"></div>
                    <div class="category-desc">Разработка дизайн-проекта<br>и индивидуального<br>стиля участка</div>
                </div>
            </div>
            <div class="beautification">
                <div class="subcategory">
                    <div class="category-title">Благоустройство<br>и озеленение территории</div>
                    <div class="line"></div>
                    <div class="category-desc">Устройство водоемов,<br>ручьев, водопадов<br>и мостиков</div>
                </div>
            </div>
            <div class="largesized">
                <div class="subcategory">
                    <div class="category-title">Посадка и продажа<br>крупномеров</div>
                    <div class="line"></div>
                    <div class="category-desc">Посадка плодовых и<br> декоративных растений,<br> а также деревьев крупномеров</div>
                </div>
            </div>
            <div class="equipment">
                <div class="subcategory">
                    <div class="category-title">Аренда техники и доставка<br>сыпучих материалов</div>
                    <div class="line"></div>
                    <div class="category-desc">Мощение дорожек, бордюров,<br>отсыпок и площадок на любом<br>основании, с любым покрытием</div>
                </div>
            </div>
            <div class="nursery">
                <div class="subcategory">
                    <div class="category-title">Продажа растений<br>из питомника</div>
                    <div class="line"></div>
                    <div class="category-desc">Устройство живых<br>изгородей, установка<br>горок и рокарий</div>
                </div>
            </div>
            <div class="watering">
                <div class="subcategory">
                    <div class="category-title">Система полива<br>и освещение участка</div>
                    <div class="line"></div>
                    <div class="category-desc">Проектирование и создание<br>систем полива (автополива)<br>и освещения</div>
                </div>
            </div>
            <div class="lawn">
                <div class="subcategory">
                    <div class="category-title">Устройство газонов<br>на участке</div>
                    <div class="line"></div>
                    <div class="category-desc">Устройство газонов различного<br>назначения, в том числе,<br>рулонных газонов</div>
                </div>
            </div>
            <div class="gardener">
                <div class="subcategory">
                    <div class="category-title">Обслуживание и уход<br>за территорией</div>
                    <div class="line"></div>
                    <div class="category-desc">Уход за садом,<br>посадками и газоном,<br>поддержание чистоты двора</div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "HomeServices"
    }
</script>

<style scoped>
.wow {
    animation: fadeInUp;
    animation-duration: 2s;
}
.caption {
    display: block;
    max-width: 1000px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
}
.title {
    font-size: 20px;
    font-weight: bold;
    color: #171C16;
    border-bottom: 4px solid #22AA22;
}
.subtitle {
    color: #171C16;
    margin-top: 15px;
}
.services {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-auto-rows: auto;
    grid-gap: 2em;
}
.landscape {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/landscape.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.beautification {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/beautification.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.largesized {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/largesized.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.equipment {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/equipment.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.nursery {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/nursery.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.watering {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/watering.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.lawn {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/lawn.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.gardener {
    display: flex;
    justify-content: center;
    height: 325px;
    background: url(../assets/images/services/gardener.jpg);
    background-size: cover;
    background-position: center;
    padding: 0 10px 0 10px;
}
.subcategory {
    position: relative;
    top: 185px;
    height: 0px;
}
.category-title {
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    font-weight: bold;
    color: white;
}
.line {
    width: 140px;
    margin: auto;
    height: 5px;
    margin-bottom: 5px;
    background-color: #22AA22;
}
.category-desc {
    text-align: center;
    font-size: 14px;
    color: white;
}

@media screen and (min-width: 1920px) {
    .caption {
        max-width: 1200px;
        margin-top: 40px;
        margin-bottom: 80px;
    }
    .title {
        font-size: 23px;
    }
    .subtitle {
        font-size: 20px;
    }
    .services {
        grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    }
    .category-title {
        font-size: 20px;
    }
    .landscape {
        height: 360px;
    }
    .beautification {
        height: 360px;
    }
    .largesized {
        height: 360px;
    }
    .equipment {
        height: 360px;
    }
    .nursery {
        height: 360px;
    }
    .watering {
        height: 360px;
    }
    .lawn {
        height: 360px;
    }
    .gardener {
        height: 360px;
    }
    .category-desc {
        font-size: 16px;
    }
    .subcategory {
        top: 190px;
    }
}
@media screen and (max-width: 1024px) {
    .caption {
        max-width: 850px;
    }
    .services {
        grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    }
}
@media screen and (max-width: 900px) {
    .caption {
        max-width: 750px;
    }
    .headlines {
        text-align: center;
    }
}
@media screen and (max-width: 600px) {
    .caption {
        margin-top: 0;
        margin-left: 30px;
        margin-right: 30px;
    }
    .title {
        font-size: 16px;
    }
    .subtitle {
        font-size: 14px;
    }
    .services {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }
    .category-title {
        font-size: 14px;
    }
    .category-desc {
        font-size: 12px;
    }
}
@media screen and (max-width: 375px) {
    .caption {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 50px;
        margin-right: 50px;
    }
    .title {
        font-size: 15px;
    }
    .subtitle {
        font-size: 13px;
    }
    .services {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }
    .category-title {
        font-size: 13px;
    }
    .category-desc {
        font-size: 12px;
    }
}
</style>