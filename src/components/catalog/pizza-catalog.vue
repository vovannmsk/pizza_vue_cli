<template>
    <div class="pizza-catalog">
        <!-- <font-awesome-icon icon="fa-solid fa-cart-shopping"  size="xl">
        </font-awesome-icon> -->
        <router-link :to="{name: 'cart'}">
            <div class="pizza-catalog__link_to_cart  btn btn-secondary">Cart: {{ CART.length }}</div>
        </router-link>

        <div class="container">
            <div class="row">
                <pizzaCatalogItem
                    v-for="product in PRODUCTS.results"
                    :key="product.pk"
                    :product_data="product"
                    @productToCart="addToCart"
                >

                </pizzaCatalogItem>
            </div>

            <br> <br>
            <nav aria-label="...">
            <ul class="pagination justify-content-center">


                <a 
                    v-if="PRODUCTS.previous"
                    @click="page_change_previous"
                    class="page-link" 
                    href="#" 
                    aria-label="Previous"
                >
                    <span aria-hidden="true">&laquo;</span>
                </a>

                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">{{number_page_f()}}</a>
                </li>

                <a  
                    v-if="PRODUCTS.next"
                    @click="page_change_next"
                    class="page-link" 
                    href="#" 
                    aria-label="Next"
                >
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </ul>
            </nav>
        </div>    
    </div>
</template>

<script>
    import pizzaCatalogItem from './pizza-catalog-item.vue'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'pizza-catalog',
        components: {
            pizzaCatalogItem
        },
        props: {},
        data() {
            return {
      
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'CATEGORY',
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_OF_CATEGORY_FROM_API',
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART',
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            page_change_next() {
                //ссылку PRODUCTS.next получаем из API
                this.GET_PRODUCTS_FROM_API(this.PRODUCTS.next)
            },
            page_change_previous() {
                //ссылку PRODUCTS.previous получаем из API
                this.GET_PRODUCTS_FROM_API(this.PRODUCTS.previous)
            },
            //текущий номер страницы
            number_page_f () {
                if (this.PRODUCTS.next) {
                    return parseInt(this.PRODUCTS.next.slice(-1)) - 1
                } else {
                    if (this.PRODUCTS.previous) {
                        if (this.PRODUCTS.previous.slice(-1)==="/")
                        {
                            return 2
                        } else {
                            return parseInt(this.PRODUCTS.previous.slice(-1)) + 1
                        }
                    } else {
                        return 1
                    }
                }
            }

        },
        mounted() {
            this.GET_PRODUCTS_OF_CATEGORY_FROM_API(this.CATEGORY)
        }
    }
</script>


<style lang="scss">
    .pizza-catalog {
        &__link_to_cart {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px #aeaeae;
        }
    } 

</style>