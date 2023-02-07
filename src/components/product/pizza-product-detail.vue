<template>
    <div class="pizza-product-detail col-lg-3 col-sm-6 mb-2 card">
        <div class="card-img-top product-thumb">
            <img    :src="product_data.photo" 
                    :alt="product_data.shortName"
            >
        </div>
        <div class="card-body product-details">
            <h4 class="card-title">{{product_data.name}}</h4>
            <p class="card-text">Ингредиенты: {{product_data.ingredients}}</p>
            <h5 class="card-text card-price">Цена: {{product_data.currentPrice}} руб.</h5>
        </div>
        <div class="card-footer text-muted product-bottom">
            <div class="d-flex justify-content-between">
                <div class="quantity card-text">
                    - 1 +
                </div>
                <div class="cart-button">
                    <button 
                        class="pizza-catalog-item-cart btn btn-primary" 
                        @click="addToCart"
                        >В корзину
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pizza-product-detail',
        components: {

        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                
            }
        },
        computed: {},
        methods: {

        },
        mounted() {
            
        },
    }
</script>


<style lang="scss">
    // .pizza-product-detail {
    // }
    .card {
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06);
    transition: all .3s;
    margin-right: 10px;
    }

    .card:hover {
        box-shadow: 0 14px 30px -15px rgba(0,0,0,0.75);
    }

    // .product-thumb a {
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     height: 200px;
    //     padding: 20px;
    // }

    .product-thumb img {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 200px;
        padding: 20px;
        max-width: 100%;
        max-height: 100%;
    }

    .product-details {
        padding:20px;
    }

    .product-details h4 {
        font-weight: 500;
        display: block;
        height: 60px;
        overflow: hidden;
    }

    .product-details p {
        font-size:15px;
        margin-bottom:20px;
        color: #999;
        height: 44px;
        overflow: hidden;
    }

    .product-details h5 {
        font-size:18px;
        color: $color;
        // color: #ee6e73;
        font-weight: 600;
    }

    .product-bottom {
        overflow:hidden;
        padding: 20px;
    }

    .quantity p {
        margin-top: 7px;
        margin-bottom: 7px;
    }

</style>