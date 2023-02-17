<template>
    <div class="pizza-wrapper-catalog">
        <div class="row">
            <div class="col-md-3">    
                <!--  sidebar  -->
                <pizzaWrapperFilters></pizzaWrapperFilters>
            </div>
            <div class="col-md-9"> 
                <pizza-catalog></pizza-catalog>
            </div>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
=======
    // import { mapActions } from 'vuex'

    // import pizzaCategories from './pizza-categories.vue'
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
    import pizzaCatalog from './pizza-catalog.vue'
    import pizzaWrapperFilters from './pizza-wrapper-filters.vue'
    // import { mapActions,  } from 'vuex'

    export default {
        name: 'pizza-wrapper-catalog',
        components: {
            pizzaCatalog,
            pizzaWrapperFilters,
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {},
<<<<<<< HEAD
        methods: {
            // ...mapActions([
            //     'GET_PRODUCTS_FROM_API',
            // ]),
        },
        mounted() {
            // this.GET_PRODUCTS_FROM_API();
        }
=======
        methods: {},
        mounted() {}
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc

    }
</script>


<style lang="scss">
    // .pizza-wrapper-catalog {
        
    // } 

</style>