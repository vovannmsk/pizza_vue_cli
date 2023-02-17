<template>
    <pizza-popup
        v-if="isPopupVisible"
        @closePopup="closePopup"
        :popupTitle="this.PRODUCT.name"
    >
        <pizzaWrapperProduct
        >
        </pizzaWrapperProduct>
    </pizza-popup>

    <div class="pizza-products-order">
        <div class="container-fluid text-center">
            <div class="row text-bg-primary p-4">
                <h2>Продукты в заказе</h2>
            </div>
            
            <div class="row heading align-items-center"> 
                <div class="col-3">Фото</div>
                <div class="col-5">Наименование продукта</div>
                <div class="col-2">Цена</div>
                <div class="col-2">Кол-во</div>
            </div>
            <div class="row order-items align-items-center"
                v-for="item in PRODUCTS_ORDER"
                :key="item.pk"
            > 
                <img 
                    class="btn col-3" 
                    :src="item.product.photo" 
                    :alt="item.product.shortName" 
                    width="100" height="100"
                    @click="showPopup(item.product)"
                >
                <div class="col-5">{{ item.product.name }}</div>
                <div class="col-2">{{ item.price }}</div>
                <div class="col-2">{{ item.quantity }}</div>
            </div>
        </div>    
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import pizzaPopup from '../popup/pizza-popup.vue'
    import pizzaWrapperProduct from '../product/pizza-wrapper-product.vue'

    export default {
        name: 'pizza-products-order',
        components: {
            pizzaPopup,
            pizzaWrapperProduct,

        },
        props: {

        },
        data() {
            return {
                isPopupVisible: false,   
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS_ORDER',
                'PRODUCT',
            ]),
        },
        methods: {
            ...mapActions([
                'SELECT_PRODUCT_FROM_CATALOG',
                'SET_PRODUCT_FROM_CATALOG',
            ]),
            showPopup(product) {
                console.log(product);
                this.SELECT_PRODUCT_FROM_CATALOG(product.pk);  //сохраняем в store номер текущего товара
                this.SET_PRODUCT_FROM_CATALOG(product); // сохраняем в store всю инфу о текущем товаре
                console.log(this.PRODUCT);
                this.isPopupVisible = true;
            },
            closePopup() {
                this.isPopupVisible = false;
            },

        },
        mounted() {
            // this.GET_ORDERS_FROM_API();
        }
    }
</script>

<style lang="scss">
    // .pizza-products-order {

    // } 

</style>