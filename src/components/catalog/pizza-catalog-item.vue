<template>
    <pizza-popup
        v-if="isPopupVisible"
        @closePopup="closePopup"
        :popupTitle="product_data.name"
    >
        <pizzaWrapperProduct></pizzaWrapperProduct>
    </pizza-popup>
    <div class="pizza-catalog-item col-lg-3 col-sm-6 mb-2 card">

        <div class="card-img-top product-thumb">
            <!-- <router-link :to="{name: 'product', params: {pk: product_data.pk}}"> -->
            
            <!-- используем роутер для перемещения на страницу с инфо о товаре     -->
            <!-- <router-link :to="{name: 'product'}">
                <img    :src="product_data.photo" 
                        :alt="product_data.shortName"
                        @click="showProductDetail"
                >
            </router-link> -->

            <!-- используем модальное окно для просмотра инфо о товаре     -->
            <img    class="btn"
                    :src="product_data.photo" 
                    :alt="product_data.shortName"
                    @click="showPopup"
                >
        </div>
        <div class="card-body product-details">
            <h4 class="card-title">{{product_data.name}}</h4>
            <p class="card-text">Ингредиенты: {{product_data.ingredients}}</p>
            <h5 class="card-text card-price">Цена: {{ formattedPrice(product_data.currentPrice) }}</h5>
        </div>
        <div class="card-footer text-muted product-bottom">
            <div class="d-flex justify-content-center">
                <!-- <div class="quantity card-text">
                    - 1 +
                </div> -->
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
    import { mapActions } from 'vuex'
    import pizzaPopup from '../popup/pizza-popup.vue'
    import pizzaWrapperProduct from '../product/pizza-wrapper-product.vue'

    export default {
        name: 'pizza-catalog-item',
        // явное объявление о том, что событие 'productToCart' 
        // будет сгенерировано в этом компоненте
        emits: ['productToCart'],   

        components: {
            pizzaPopup,
            pizzaWrapperProduct,
        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            },
        },
        data() {
            return {
                isPopupVisible: false,   
            }
        },
        computed: {
            
        },
        methods: {
            ...mapActions([
                'SELECT_PRODUCT_FROM_CATALOG',
                'SET_PRODUCT_FROM_CATALOG',
                'FORMATTED_PRICE',
            ]),
            addToCart() {
                this.$emit('productToCart', this.product_data)
            },
            /**
            * текущий продукт считается выбранным для последующего 
            * использования в других компонентах. 
            */
            showProductDetail() {
                this.SELECT_PRODUCT_FROM_CATALOG(this.product_data.pk);
                this.SET_PRODUCT_FROM_CATALOG(this.product_data);
            },
            showPopup() {
                this.SELECT_PRODUCT_FROM_CATALOG(this.product_data.pk);
                this.SET_PRODUCT_FROM_CATALOG(this.product_data);
                this.isPopupVisible = true;
            },
            closePopup() {
                this.isPopupVisible = false;
            },
            formattedPrice(value) {
                return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' руб.';
            },
        },
    }
</script>


<style lang="scss">
    // $color:red; 
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