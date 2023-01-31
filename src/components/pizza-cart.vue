<template>
    <div class="pizza-cart container">
        <router-link :to="{name: 'catalog'}">
            <div class="pizza-cart__link_to_catalog btn btn-secondary">В каталог</div>
        </router-link>

        <div class="row">
            <div class="text-bg-primary p-4">
                <h2>Ваша корзина</h2>
            </div>

            <div v-if="!CART.length"><h1>Корзина пуста</h1></div>
            <div v-else>
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">Фото</th>
                        <th scope="col">Наименование продукта</th>
                        <th scope="col">Кол-во убавить</th>
                        <th scope="col">Количество</th>
                        <th scope="col">Кол-во прибавить</th>
                        <th scope="col">Удалить</th>
                        <th scope="col">Цена продукта</th>
                        <th scope="col">Итоговая цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <div class="container">
                        <div class="row">
                            <h1>корзина</h1> -->
                            <pizzaCartItem
                                v-for="(item, index,) in CART"
                                :key="item.pk"
                                :cart_item_data="item"
                                @deleteFromCart="deleteFromCart(index)"
                                @increment="increment(index)"
                                @decrement="decrement(index)"
                            >
                            </pizzaCartItem>
                        <tr class="total">
                            <td>Total</td>
                            <td colspan="2"></td>
                            <td class="num"> {{ totalQuantity }}  </td>
                            <td colspan="3"></td>
                            <td class="num"> {{ totalSumma }} руб.  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
    import pizzaCartItem from './pizza-cart-item.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-cart',
        components: {
            pizzaCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'CART',
            ]),
            totalSumma: function() {
                let summa = 0
                for (let item of this.CART) {
                    summa = summa + item.currentPrice * item.quantity
                }
                return summa
            },
            totalQuantity: function() {
                let totalQty = 0
                for (let item of this.CART) {
                    totalQty = totalQty + item.quantity
                }
                return totalQty
            }

        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM',
            ]),
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            },
            increment(index) {
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index) {
                this.DECREMENT_CART_ITEM(index)
            }
        },

    }
</script>


<style lang="scss">
    .pizza-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
        &__link_to_catalog {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
        }
        .total {
            font-size: 20px;
            font-weight: 700;
        }
        .table th {
            vertical-align: middle;
        }
    }

</style>