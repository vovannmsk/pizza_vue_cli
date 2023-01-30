<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body link="White">
    <div class="pizza-wrapper container">
        <div class="row">
            <div class="col-md-3">    <!--  sidebar  -->
            </div>
            <!-- <RouterView></RouterView> -->
            <!-- <router-view>        </router-view> -->
            <div class="col-md-9">    
                <pizzaCatalog></pizzaCatalog>
            </div>
            <pizzaCart 
                v-if="CART.length"
                :cart_data="CART"
                >
            </pizzaCart>
        </div>

    </div>
</body>

</template>

<script>
import pizzaCatalog from './pizza-catalog.vue'
import pizzaCart from './pizza-cart.vue'

import { mapGetters} from 'vuex'

    export default {
        name: 'pizza-wrapper',
        components: {
            pizzaCatalog,
            pizzaCart,
        },
        props: {},
        data() {
            return {
                title: 'Pizza Wrapper ура ура'
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        },
        methods: {},

    }
</script>


<style>
    /* .pizza-wrapper {

    } */
    html {
        font-size:16px;
    }
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #ffe0b2;
        font-size:16px;
        font-weight:400;
        color:#000;
    }
</style>