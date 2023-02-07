<template>
    <div class="pizza-wrapper-product">
        <router-link :to="{name: 'cart'}">
            <div class="pizza-catalog__link_to_cart  btn btn-secondary">Cart: {{ CART.length }}</div>
        </router-link>
        <div class="row">
            <div class="col-md-3">    
                <pizza-product-detail> </pizza-product-detail>
            </div>
            <div class="col-md-9"> 
                <pizza-product-feedbacks></pizza-product-feedbacks>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import pizzaProductDetail from './pizza-product-detail.vue'
    import pizzaProductFeedbacks from './pizza-product-feedbacks.vue'

    export default {
        name: 'pizza-wrapper-product',
        components: {
            pizzaProductDetail,
            pizzaProductFeedbacks,
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'CART'
            ]),
        },
        methods: {
            // ...mapActions([
            //     'SELECT_PRODUCT_FROM_CATALOG',
            // ]),
        },
        mounted() {
            // this.SELECT_PRODUCT_FROM_CATALOG(this.pk)
        }

    }
</script>


<style lang="scss">
    /* .pizza-wrapper-product {
        
    }  */

</style>