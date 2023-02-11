<template>
    <div class="pizza-wrapper-filters">
        <pizza-categories> </pizza-categories>
        <pizzaRangeSliders></pizzaRangeSliders>
    </div>
</template>

<script>
    import pizzaCategories from './pizza-categories.vue'
    import pizzaRangeSliders from './pizza-range-sliders.vue';
    
    export default {
        name: 'pizza-wrapper-filters',
        components: {
            pizzaCategories,
            pizzaRangeSliders,
        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
        },
        methods: {
        },
        mounted() {
        }

    }
</script>


<style lang="scss">
    // .pizza-wrapper-filters {
        
    // } 

</style>