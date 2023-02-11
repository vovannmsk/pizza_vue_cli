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
                    v-for="product in filteredProducts"
                    :key="product.pk"
                    :product_data="product"
                    @productToCart="addToCart"
                >
                <!-- v-for="product in PRODUCTS.results" -->

                </pizzaCatalogItem>
            </div>

            <!-- пагинация -->
            <br> <br>
            <nav aria-label="...">
            <ul class="pagination justify-content-center">
                <!-- стрелка влево -->
                <a 
                    v-if="PRODUCTS.previous"
                    @click="page_change_previous"
                    class="page-link" 
                    href="#" 
                    aria-label="Previous"
                >
                    <span aria-hidden="true">&laquo;</span>
                </a>

                <!-- номер текущей страницы -->
                <li class="page-item active" aria-current="page">
                    <a class="page-link" href="#">{{number_page_f()}}</a>
                </li>

                <!-- стрелка вправо -->
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
                sortedProducts: [],
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART',
                'CATEGORY',
                'MIN_PRICE',
                'MAX_PRICE',
            ]),
            filteredProducts() {
                if (this.sortedProducts.length) {
                return this.sortedProducts
                } else {
                return this.PRODUCTS.results
                }
            },
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
            },
            sorting_products() {
                let vm = this;
                this.sortedProducts = [...this.PRODUCTS.results]
                console.log(this.sortedProducts)
                this.sortedProducts = this.sortedProducts.filter(function (item) {
                    return item.currentPrice >= vm.MIN_PRICE && item.currentPrice <= vm.MAX_PRICE;
                });
                console.log(this.sortedProducts)
            }

        },
        mounted() {
            // подгружаем список товаров из выбранной категории
            // по умолчанию это - все категории товаров
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