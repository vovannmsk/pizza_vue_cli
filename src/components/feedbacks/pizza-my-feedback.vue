<template>
    <pizza-popup
        v-if="isPopupVisible"
        @closePopup="closePopup"
        :popupTitle="this.feedback.product.name"
    >
        <pizzaWrapperProduct
        >
        </pizzaWrapperProduct>
    </pizza-popup>
    
    <div class="pizza-my-feedback row p-1 align-items-center">
        <div class="col-2 product-img">
            <img     
                    :src="feedback.product.photo" 
                    :alt="feedback.product.shortName" 
                    @click="showPopup(feedback.product)"
                    width="70" height="70"
                >
        </div>
        <div class="col-5">{{ feedback.product.name }}</div>
        <div class="col-5">{{ feedback.comment }}</div>

        <!-- <tr>
            <td class="product-img"> 
                <img     
                    :src="feedback.product.photo" 
                    :alt="feedback.product.shortName" 
                    @click="showPopup(feedback.product)"
                    width="70" height="70"
                >
            </td>
            <td class="product_td"> {{ feedback.product.name }} </td>
            <td class="product_td"> {{ feedback.comment }} </td>
        </tr> -->
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import pizzaWrapperProduct from '../product/pizza-wrapper-product.vue'
    import pizzaPopup from '../popup/pizza-popup.vue'

    export default {
        name: 'pizza-my-feedback',
        components: {
            pizzaWrapperProduct,
            pizzaPopup
        },
        props: {
            feedback: {
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
            ...mapGetters([
                // 'MY_FEEDBACKS',
            ]),
        },
        methods: {
            ...mapActions([
                // 'GET_MY_FEEDBACKS_FROM_API',
                'SELECT_PRODUCT_FROM_CATALOG',
                'SET_PRODUCT_FROM_CATALOG',
            ]),
            showPopup(product) {
                console.log(product);
                this.SELECT_PRODUCT_FROM_CATALOG(product.pk);  //сохраняем в store номер текущего товара
                this.SET_PRODUCT_FROM_CATALOG(product); // сохраняем в store всю инфу о текущем товаре
                // console.log(this.PRODUCT);
                this.isPopupVisible = true;
            },
            closePopup() {
                this.isPopupVisible = false;
            },
        },
        mounted() {
            // подгружаем список всех отзывов текущего пользователя
            // this.GET_MY_FEEDBACKS_FROM_API()
        }
    }
</script>

<style lang="scss">
    .pizza-my-feedback {
        .product-img {
        :hover {
            cursor: pointer;
        }
        // .feedback-items {
        //     margin-top: 5px;
        //     margin-bottom: 5px;
        // }
    }

    } 
    // .product_td {
    //     vertical-align: middle;
    // }
</style>