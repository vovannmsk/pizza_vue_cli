<template>
    <div class="pizza-catalog">
        <!--<p class="aa">Каталог</p> -->

        <div class="container">
            <div class="row">
                <pizzaCatalogItem
                    v-for="product in PRODUCTS.results"
                    :key="product.pk"
                    :product_data="product"
                    @productToCart="addToCart"
                >
                </pizzaCatalogItem>
            </div>
        </div>    
    </div>
</template>

<script>
    import pizzaCatalogItem from './pizza-catalog-item.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-catalog',
        components: {
            pizzaCatalogItem
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters(['PRODUCTS']),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                // console.log (data.pk)
                this.ADD_TO_CART(data)
            },


        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        }

    }
</script>


<style>
    /* .pizza-catalog {

    } */

</style>