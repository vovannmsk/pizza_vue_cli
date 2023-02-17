<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body link="White">
    <div class="pizza-wrapper container">
        <router-link :to="{name: 'cart'}">
            <div class="pizza-wrapper__link_to_cart  btn btn-secondary">Cart: {{ CART.length }}</div>
        </router-link>
        <pizza-navbar> 
        </pizza-navbar>
        <router-view> </router-view>
    </div>
</body>

</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    // import pizzaCategories from './pizza-categories.vue';
    import pizzaNavbar from './pizza-navbar.vue';


    export default {
        name: 'pizza-wrapper',
        props: {},
        data() {
            return {
            }
        },
        components: {
            pizzaNavbar,
        },
        computed: {
            ...mapGetters([
                'CART',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                ]),
        },
        mounted() {
            // this.GET_PRODUCTS_FROM_API();
        }
    }
</script>


<style lang="scss">
    .pizza-wrapper {
        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
        }
    } 
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