<template>
    <div class="pizza-catalog">
        <div class="container">
            <div class="row">
                <pizzaCatalogItem
<<<<<<< HEAD
                    v-for="product in filteredProductOnPage"
=======
                    v-for="product in FILTERED_PRODUCTS"
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
                    :key="product.pk"
                    :product_data="product"
                    @productToCart="addToCart"
                >

                </pizzaCatalogItem>
            </div>

            <!-- пагинация -->
            <!-- <br> <br>
            <nav aria-label="...">
<<<<<<< HEAD
                <ul class="pagination justify-content-center">

                    <a 
                        v-if="isPrevious"
                        @click="page_change_previous"
                        class="page-link" 
                        href="#" 
                        aria-label="Previous"
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>

                    <li class="page-item active" aria-current="page">
                        <a class="page-link" href="#">{{CURRENT_PAGE}}</a>
                    </li>

                    <a  
                        v-if="isNext"
                        @click="page_change_next"
                        class="page-link" 
                        href="#" 
                        aria-label="Next"
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </ul>
            </nav>
=======
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
            </nav> -->
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
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
<<<<<<< HEAD
                productsPerPage: 3,
                // currentPage: 1,
=======
                // sortedProducts: [],
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
            }
        },
        computed: {
            ...mapGetters([
                'CART',
                'FILTERED_PRODUCTS',
<<<<<<< HEAD
                'CURRENT_PAGE',
            ]),
            totalPages() {
                return Math.ceil(this.FILTERED_PRODUCTS.length / this.productsPerPage)
            },
            isPrevious() {
                if (this.CURRENT_PAGE > 1) {
                    return true
                } else {
                    return false
                }
            },
            isNext() {
                if (this.CURRENT_PAGE < this.totalPages) {
                    return true
                } else {
                    return false
                }
            },
            filteredProductOnPage() {
                let from = (this.CURRENT_PAGE - 1) * this.productsPerPage;
                let to = from + this.productsPerPage;
                return this.FILTERED_PRODUCTS.slice(from, to)
            }
=======
            ]),
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
        },
        methods: {
            ...mapActions([
                'ADD_TO_CART',
                'CHANGE_CURRENT_PAGE',
                'GET_PRODUCTS_FROM_API',
                'FILTER_PRODUCTS',
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
<<<<<<< HEAD
            page_change_next() {
                if (this.CURRENT_PAGE < this.totalPages) {
                    this.CHANGE_CURRENT_PAGE(this.CURRENT_PAGE + 1);
                }
            },
            page_change_previous() {
                if (this.CURRENT_PAGE > 1) {
                    this.CHANGE_CURRENT_PAGE(this.CURRENT_PAGE - 1);
                }
            },
        },
        mounted() {
            // подгружаем список всех товаров
            //this.GET_PRODUCTS_FROM_API();
            this.FILTER_PRODUCTS();
            this.CHANGE_CURRENT_PAGE(1);

=======
            // page_change_next() {
            //     //ссылку PRODUCTS.next получаем из API
            //     this.GET_PRODUCTS_FROM_API(this.PRODUCTS.next)
            // },
            // page_change_previous() {
            //     //ссылку PRODUCTS.previous получаем из API
            //     this.GET_PRODUCTS_FROM_API(this.PRODUCTS.previous)
            // },
            //текущий номер страницы
            // number_page_f () {
            //     if (this.PRODUCTS.next) {
            //         return parseInt(this.PRODUCTS.next.slice(-1)) - 1
            //     } else {
            //         if (this.PRODUCTS.previous) {
            //             if (this.PRODUCTS.previous.slice(-1)==="/")
            //             {
            //                 return 2
            //             } else {
            //                 return parseInt(this.PRODUCTS.previous.slice(-1)) + 1
            //             }
            //         } else {
            //             return 1
            //         }
            //     }
            // },
            // sorting_products() {
            //     let vm = this;
            //     this.sortedProducts = [...this.PRODUCTS.results]
            //     console.log(this.sortedProducts)
            //     this.sortedProducts = this.sortedProducts.filter(function (item) {
            //         return item.currentPrice >= vm.MIN_PRICE && item.currentPrice <= vm.MAX_PRICE;
            //     });
            //     console.log(this.sortedProducts)
            // }

        },
        mounted() {
            // подгружаем список товаров из выбранной категории
            // по умолчанию это - все категории товаров
            // this.GET_PRODUCTS_OF_CATEGORY_FROM_API(this.CATEGORY)

            // подгружаем список всех товаров (он подгружается в pizza-wrapper)
            //this.GET_PRODUCTS_FROM_API();
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
        }
    }
</script>

<style lang="scss">
    // .pizza-catalog {
    //     &__link_to_cart {
    //         position: absolute;
    //         top: 10px;
    //         right: 10px;
    //         padding: $padding*2;
    //         border: solid 1px #aeaeae;
    //     }
    // } 

</style>