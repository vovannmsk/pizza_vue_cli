<template>
    <div class="pizza-wrapper-product">
        <div class="row">
            <div class="col-md-4">    
                <pizza-product-detail> </pizza-product-detail>
            </div>
            <div class="col-md-8"> 
                <pizza-product-feedbacks></pizza-product-feedbacks>
            </div>
        </div>
    </div>
</template>

<script>
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