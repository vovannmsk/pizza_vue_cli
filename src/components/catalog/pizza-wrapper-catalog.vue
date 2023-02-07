<template>
    <div class="pizza-wrapper-catalog">
        <!-- <router-link :to="{name: 'cart'}">
            <div class="pizza-catalog__link_to_cart  btn btn-secondary">Cart: {{ CART.length }}</div>
        </router-link> -->

        <div class="row">
            <div class="col-md-3">    
                <!--  sidebar  -->
                <pizza-categories> </pizza-categories>
            </div>
            <div class="col-md-9"> 
                <pizza-catalog></pizza-catalog>
            </div>
        </div>
    </div>
</template>

<script>
    import pizzaCategories from './pizza-categories.vue'
    import pizzaCatalog from './pizza-catalog.vue'

    export default {
        name: 'pizza-wrapper-catalog',
        components: {
            pizzaCatalog,
            pizzaCategories,
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
        },
        methods: {
        },
        mounted() {
        }

    }
</script>


<style lang="scss">
    // .pizza-wrapper-catalog {
        
    // } 

</style>