<template>
    <div class="pizza-categories">
        <ul class="list-group">
            <li class="list-group-item btn" 
                v-bind:class="{active: category.pk===CATEGORY.pk}" 
                v-for="category in CATEGORIES"
                :key="category.pk"
                @click="selectOfCategory(category)"
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
                'FILTERED_PRODUCTS',
            ]),
            
        },
        methods: {
            ...mapActions([
                'GET_CATEGORIES_FROM_API',
                'SELECT_CATEGORY_PRODUCTS',
                'FILTER_PRODUCTS',
                'CHANGE_CURRENT_PAGE',
            ]),
            selectOfCategory(category) {
                // фиксируем выбранную категорию товаров в store
                this.SELECT_CATEGORY_PRODUCTS(category);
                // запускаем отбор по установленным фильтрам
                // и текущая страница в пагинации = 1
                this.FILTER_PRODUCTS();
                this.CHANGE_CURRENT_PAGE(1);
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