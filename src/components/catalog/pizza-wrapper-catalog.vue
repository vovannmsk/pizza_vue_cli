<template>
    <div class="pizza-wrapper-catalog">
        <div class="row">
            <div class="col-md-3">    
                <!--  sidebar  -->
                <pizzaWrapperFilters 
                />
            </div>
            <div class="col-md-9"> 
                <pizza-catalog></pizza-catalog>
            </div>
        </div>
    </div>
</template>

<script>
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
        methods: {
            // ...mapActions([
            //     'GET_PRODUCTS_FROM_API',
            // ]),
        },
        mounted() {
            // this.GET_PRODUCTS_FROM_API();
        }

    }
</script>


<style lang="scss">
    // .pizza-wrapper-catalog {
        
    // } 

</style>