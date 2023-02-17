<template>
    <div class="pizza-range-sliders container">
        <br>
        <br>
        <div class="range-slider row">
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
            <p>Min: {{this.MIN_PRICE}}</p>
            <p>Max: {{this.MAX_PRICE}}</p>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
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
            ...mapGetters([
                'MIN_PRICE',
                'MAX_PRICE',
            ]),
        },
        methods: {
            ...mapActions([
                'FILTER_PRODUCTS',
                'MIN_PRICE_CHANGE',
                'MAX_PRICE_CHANGE',
<<<<<<< HEAD
                'CHANGE_CURRENT_PAGE',
=======
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
            ]),
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                let tmp = this.maxPrice;
                this.maxPrice = this.minPrice;
                this.minPrice = tmp;
                }
                this.MIN_PRICE_CHANGE(this.minPrice);
                this.MAX_PRICE_CHANGE(this.maxPrice);
                // запускаем отбор по установленным фильтрам
<<<<<<< HEAD
                // и текущая страница в пагинации = 1
                this.CHANGE_CURRENT_PAGE(1);
                this.FILTER_PRODUCTS()

=======
                this.FILTER_PRODUCTS()
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
            },
        },
        mounted() {
            // this.GET_CATEGORIES_FROM_API();
            this.minPrice = this.MIN_PRICE;
            this.maxPrice = this.MAX_PRICE;
        },

    }
</script>


<style lang="scss">
<<<<<<< HEAD
    // .pizza-range-sliders {

    // } 
=======
    /* .pizza-range-sliders {

     } */
>>>>>>> a534917f84a817625eaa4581a29e014a81a977cc
    .range-slider {
        width: 100%;
        margin: auto;
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

