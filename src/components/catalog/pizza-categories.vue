<template>
    <div class="pizza-categories">
        <ul class="list-group">
            <li class="list-group-item btn" v-bind:class="{active: category.pk===CATEGORY}" 
                v-for="category in CATEGORIES"
                :key="category.pk"
                @click="selectOfCategory(category.pk)"
            >  
                {{category.nameOfType}}
            </li>    
        </ul>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'pizza-categories',
        components: {

        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'CATEGORIES',
                'CATEGORY',
            ]),
            
        },
        methods: {
            ...mapActions([
                'GET_CATEGORIES_FROM_API',
                'SELECT_CATEGORY_PRODUCTS',
                'GET_PRODUCTS_OF_CATEGORY_FROM_API',
            ]),
            selectOfCategory(pk) {
                this.SELECT_CATEGORY_PRODUCTS(pk)
                this.GET_PRODUCTS_OF_CATEGORY_FROM_API(this.CATEGORY)                
            },
        },
        mounted() {
            this.GET_CATEGORIES_FROM_API();
        },

    }
</script>


<style>
    /* .pizza-categories {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto; 
     } */

</style>

<!-- v-for="category in CATEGORIES" -->