<template>
    <div class="pizza-catalog">
        <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="xl">
        </font-awesome-icon> -->
        <router-link :to="{name: 'cart'}">
            <div class="pizza-catalog__link_to_cart  btn btn-secondary">Cart: {{ CART.length }}</div>
        </router-link>
 
                
        <!-- </div> -->
        <div class="container">
            <div class="row">
                <pizzaCatalogItem
                    v-for="product in PRODUCTS.results"
                    :key="product.pk"
                    :product_data="product"
                    @productToCart="addToCart"
                >
                    <!-- @productDetail="toProductDetail" -->
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
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'CATEGORY',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_OF_CATEGORY_FROM_API',
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            // toProductDetail() {
                
            // }
        },
        mounted() {
            this.GET_PRODUCTS_OF_CATEGORY_FROM_API(this.CATEGORY)
            // this.GET_PRODUCTS_FROM_API();

        }

    }
</script>


<style lang="scss">
    .pizza-catalog {
        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
        }
    } 

</style>