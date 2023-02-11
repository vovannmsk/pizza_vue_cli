<template>
    <div class="pizza-range-sliders container">
        <br>
        <br>
        <div class="range-slider">
            <input
                type="range"
                min="0"
                max="2500"
                step="10"
                v-model.number="minPrice"
                @change="setRangeSlider"
            >
            <input
                type="range"
                min="0"
                max="2500"
                step="10"
                v-model.number="maxPrice"
                @change="setRangeSlider"
            >
        </div>
        <br>
        <br>
        <div class="range-values">
            <p>Min: {{minPrice}}</p>
            <p>Max: {{maxPrice}}</p>
        </div>
    </div>
</template>
<script>
    // import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'pizza-range-sliders',
        components: {

        },
        props: {},
        data() {
            return {
                minPrice: 0,
                maxPrice: 2500,
            }
        },
        computed: {
            // ...mapGetters([
            //     'CATEGORIES',
            //     'CATEGORY',
            // ]),
            
        },
        methods: {
            // ...mapActions([
            //     'GET_CATEGORIES_FROM_API',
            //     'SELECT_CATEGORY_PRODUCTS',
            //     'GET_PRODUCTS_OF_CATEGORY_FROM_API',
            // ]),
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
                }
                // this.sortByCategories()
            },
        },
        mounted() {
            // this.GET_CATEGORIES_FROM_API();
        },

    }
</script>


<style lang="scss">
    /* .pizza-range-sliders {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto; 
     } */
    .range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
    }
    .range-slider svg, .range-slider input[type=range] {
        position: absolute;
        left: 0;
        bottom: 0;
    }
    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>

