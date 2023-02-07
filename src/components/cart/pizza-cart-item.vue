<template>
    <!-- <div class="pizza-cart-item"> -->
    <tr>
        <td scope="row">
            <a href="/">
                <img :src="cart_item_data.photo" :alt="cart_item_data.shortName" width="100" height="100">
            </a>
        </td>
        <td>  {{ cart_item_data.name }}   </td>
        <td>  <div class="btn btn-primary" @click="decrementItem">-</div>   </td>
        <td class="quantity">
            <div class="pizza-cart-item-quantity">{{ cart_item_data.quantity }}</div>
        </td>
        <td>  <span class="btn btn-primary" @click="incrementItem">+</span>   </td>
        <td>  
            <button class="btn btn-primary" @click="deleteFromCart">  Удалить </button>
        </td>
        <td class="num">  {{ cart_item_data.currentPrice }}руб.  </td>
        <td class="num">  {{ totalPrice }} руб.  </td>
    </tr>
    <!-- </div> -->
</template>

<script>
    // import { 
    //     mapActions, 
    //     mapGetters 
    // } from 'vuex'
    export default {
        name: 'pizza-cart-item',
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        mounted() {
        },
        computed: {
            totalPrice: function() {
                return this.cart_item_data.currentPrice * this.cart_item_data.quantity
            }

        },
    }
</script>


<style lang="scss">
    // .quantity {
    //     width: 200px;
    //     display: inline-block;
    // }

</style>