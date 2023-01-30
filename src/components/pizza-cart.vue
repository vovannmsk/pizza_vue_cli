<template>
    <div class="pizza-cart container">
        <div class="row">

        <div class="text-bg-primary p-4">
            <h2>Ваша корзина</h2>
        </div>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Фото</th>
            <th scope="col">Наименование продукта</th>
            <th scope="col">Количество</th>
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
                    v-for="(item, index,) in cart_data"
                    :key="item.pk"
                    :cart_item_data="item"
                    @deleteFromCart="deleteFromCart(index)"
                >
                </pizzaCartItem>
            <!-- </div> -->
        <!-- </div> -->
            <tr class="total">
                <td>Total</td>
                <td colspan="4"></td>
                <td class="num"> {{ totalPrice }} руб.  </td>
            </tr>
        </tbody>
    </table>
    </div>

    </div>
</template>
<script>
    import pizzaCartItem from './pizza-cart-item.vue'
    import { mapActions } from 'vuex'

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
            totalPrice: function() {
                return 2000
            }
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index) {
                // console.log(index)
                this.DELETE_FROM_CART(index)
            }
        },

    }
</script>


<style>
    .pizza-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }

</style>