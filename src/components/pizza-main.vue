<template>
    <div class="pizza-main container-fluid my-carousel">
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
                <img src="../assets/ИтальянскаяПиццаСГрибами1440.jpg" class="d-flex w-100" alt="Итальянская Пицца С Грибами">
                <div class="carousel-caption">
                <h3>Хит продаж!</h3>
                <h5>Итальянская пицца с грибами всего за 500 рублей</h5>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="../assets/СушиКраснаяИкра1440.jpg" class="d-flex w-100" alt="Суши с красной икрой">
                <div class="carousel-caption">
                    <h3>Акция недели!</h3>
                    <h5>Суши с красной икрой всего за 450 рублей</h5>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="../assets/Пепперони1440.jpg" class="d-flex w-100" alt="Пицца Пепперони">
                <div class="carousel-caption">
                    <h3>Только до конца месяца!</h3>
                    <h5>Пицца Пепперони всего за 800 рублей</h5>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
    </div>
</template>
    
<script>
    // import pizzaCategories from './pizza-categories.vue';
    //import pizzaNavbar from './pizza-navbar.vue';
    
    
        export default {
            name: 'pizza-main',
            props: {},
            data() {
                return {
                }
            },
            components: {
                // pizzaCategories,
                //pizzaNavbar,
            },
            computed: {},
            methods: {},
        }
    </script>
    
    
    <style>
        /* .pizza-main {
    
        } */
        
    </style>