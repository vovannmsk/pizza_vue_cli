<template>
    <div class="pizza-create-order">
        <div class="container">
            <div class="row">
                <div class="col-md-4">    
                <!--  order  -->
                <!-- <h1 class="h3 mb-3 font-weight-normal text-center">Информация для заказа:</h1> -->
                <div class="text-bg-secondary p-2">
                    <h3>Информация для заказа:</h3>
                </div>
                <br>
                <form v-on:submit.prevent="postOrder">
                    <div class="form-label">
                        <input type="text" name="first_name" id="first_name" v-model="firstName" class="form-control" placeholder="Ваше имя:">
                    </div>
                    <div class="form-label">
                        <input type="text" name="last_name" id="last_name" v-model="lastName" class="form-control" placeholder="Ваша фамилия">
                    </div>
                    <div class="form-label">
                        <input type="email" name="email" id="email" v-model="email" class="form-control" placeholder="Ваш email">
                    </div>
                    <div class="form-label">
                        <input type="text" name="address" id="address" v-model="address" class="form-control" placeholder="Куда доставить заказ:">
                    </div>
                    <div class="form-label">
                        <input type="tel" name="phone" id="phone" v-model="phone" class="form-control" placeholder="Телефон для связи">
                    </div>

                    <button type="submit" class="btn btn-lg btn-primary btn-block">Перейти к оплате</button>
                    <!-- @click = "postFeedback" -->
                </form>

            </div>
            <div class="col-md-8"> 
                <!-- список товаров из корзины с возможностью редактирования количества -->
                <pizza-cart-small></pizza-cart-small>
            </div>

            </div>                
        </div>    
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    // import pizzaCart from '../cart/pizza-cart.vue'
    import pizzaCartSmall from '../cart/pizza-cart-small.vue'

    export default {
        name: 'pizza-create-order',
        components: {
            // pizzaCart,
            pizzaCartSmall,
        },
        props: {},
        data() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                phone: "",
                // totalAmount: this.TOTAL_AMOUNT,
            }
        },
        computed: {
            ...mapGetters([
                'CART',
                'ORDER_ID',
                'TOTAL_AMOUNT',
            ]),
        },
        methods: {
            ...mapActions([
                'POST_ORDER_PLUS_ITEMS_TO_API',
            ]),
            //сохраняем заказ + продукты в базе
            postOrder() {
                let dataForm = {
                    "first_name": this.firstName,
                    "last_name": this.lastName,
                    "email": this.email,
                    "address": this.address,
                    "phone": this.phone,
                    "total_amount": this.TOTAL_AMOUNT,
                }
                this.POST_ORDER_PLUS_ITEMS_TO_API(dataForm)
                .then(() => {
                    this.$router.push({ name: 'main'})  //после логирования переходим 
                                                        //на главную страницу
                })
                .catch(err => {
                    console.log(err)
                })

            },

        },
        mounted() {
            // this.FILTER_PRODUCTS();
        }
    }
</script>

<style lang="scss">
    // .pizza-create-order {

    // } 

</style>