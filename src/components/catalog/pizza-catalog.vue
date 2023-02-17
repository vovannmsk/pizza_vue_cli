<template>
    <div class="pizza-catalog">
        <div class="container">
            <div class="row">
                <pizzaCatalogItem
                    v-for="product in filteredProductOnPage"
                    :key="product.pk"
                    :product_data="product"
                    @productToCart="addToCart"
                >

                </pizzaCatalogItem>
            </div>

            <!-- пагинация -->
            <br> <br>
            <nav aria-label="...">
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
                productsPerPage: 3,
                // currentPage: 1,
            }
        },
        computed: {
            ...mapGetters([
                'CART',
                'FILTERED_PRODUCTS',
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

        }
    }
</script>

<style lang="scss">
    // .pizza-catalog {

    // } 

</style>