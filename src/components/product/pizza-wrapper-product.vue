<template>
    <div class="pizza-wrapper-product container">
        <div class="row">
            <div class="col-3">    
                <pizza-product-detail> </pizza-product-detail>
            </div>
            <div class="col-9"> 
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
        },
        mounted() {
        }

    }
</script>


<style lang="scss">
    /* .pizza-wrapper-product {
        
    }  */

</style>