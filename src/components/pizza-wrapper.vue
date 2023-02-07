<template>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body link="White">
    <div class="pizza-wrapper container">
        <pizza-navbar> </pizza-navbar>
        <router-view> </router-view>
        <!-- <div class="row">
            <div class="col-md-3">    
                <pizza-categories> </pizza-categories>
            </div>
            <div class="col-md-9"> 
                <router-view> </router-view>
            </div>
        </div> -->
    </div>
</body>

</template>

<script>
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
            // pizzaCategories,
            pizzaNavbar,
        },
        computed: {},
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