<template>
    <div class="pizza-my-orders container-fluid text-center">
        <div class="row">
            <div class="col-7">
                <div class="text-bg-primary p-4">
                    <h2>Ваши заказы</h2>
                </div>
                
                <div class="row heading align-items-center"> 
                    <div class="col-1">Заказ №</div>
                    <div class="col-2">Дата заказа:</div>
                    <div class="col-4">Адрес доставки:</div>
                    <div class="col-2">Сумма, руб.</div>
                    <div class="col-1">Опла-чено</div>
                    <div class="col-1">Достав-лено</div>
                </div>
                <!-- <div class="row order-items align-items-center"
                    v-for="item in MY_ORDERS"
                    :key="item.pk"
                >  -->
                <pizzaMyOrder
                    v-for="item in MY_ORDERS"
                    :key="item.pk"
                    :item="item"
                    @selectOrder="showProducts"
                >
                </pizzaMyOrder>
            </div>
            <div class="col-5">
                <!-- здесь будут OrderItems -->
                <pizza-products-order
                    v-if="isShowProducts"
                >
                </pizza-products-order>
            </div>                    
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import pizzaMyOrder from './pizza-my-order.vue'
    import pizzaProductsOrder from './pizza-products-order.vue' 

    export default {
        name: 'pizza-my-orders',
        components: {
            pizzaMyOrder,
            pizzaProductsOrder,
        },
        props: {},
        data() {
            return {
                isShowProducts: false,
            }
        },
        computed: {
            ...mapGetters([
                'MY_ORDERS',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_ORDERS_FROM_API',
                'GET_PRODUCTS_ORDER_FROM_API',
            ]),
            // formatDate (date) {
            //     // return Date.parse (date)
            //     // return date.getDate(); //+"-"+date.getMonth()+"-"+date.getFullYear();
            //     return date.toLocaleDateString()
            // }
            showProducts(pk) {
                this.isShowProducts=true
                this.GET_PRODUCTS_ORDER_FROM_API(pk)
            }
        },
        mounted() {
            this.GET_ORDERS_FROM_API();
        }
    }
</script>

<style lang="scss">
    .pizza-my-orders {
        // .table-order th {
        //     vertical-align: middle;
        // }

        .form-label {
            margin-top: 10px;
            margin-bottom: 0px;
        }

        .heading {
            margin-top: 10px;
            margin-bottom: 10px;
            font-weight: 800;
        }
        .order-items {
            margin-top: 5px;
            margin-bottom: 5px;
        }
    } 

</style>