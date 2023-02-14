<template>
    <div class="pizza-navbar">
        <br>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"> 
                            <router-link :to="{name: 'main'}" class="nav-link">Главная</router-link>
                        </li>
                        
                        <li class="nav-item"> 
                            <router-link :to="{name: 'wrapperCatalog'}" class="nav-link">Заказ пиццы</router-link>
                        </li>

                        <li class="nav-item"> 
                            <router-link :to="{name: 'postFeedback'}" class="nav-link">Оставить отзыв</router-link>
                        </li>

                        <li class="nav-item"> 
                            <router-link :to="{name: 'contacts'}" class="nav-link">О нас</router-link>
                        </li>

                        <!-- {% if request.user.is_authenticated %} -->
                        <li class="nav-item"> <a class="nav-link" href="#">Мои заказы</a> </li>

                        <li class="nav-item"> 
                            <router-link :to="{name: 'myFeedbacks'}" class="nav-link">Мои отзывы</router-link>
                        </li>

                        <!-- {% if request.user.username == 'admin' %} -->
                        <li v-if="LOGGED_IN" class="nav-item"> 
                            <a class="nav-link" href="'http://localhost:8000/admin">Админка</a> 
                        </li>


                    </ul>
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li v-if = "LOGGED_IN" 
                            class="nav-item"
                        >   
                            <router-link :to="{name: 'logout'}" class="nav-link">
                                {{USERNAME}} | Выйти
                            </router-link>
                        </li>
                        <li v-else class="nav-item"> 
                            <router-link :to="{name: 'login'}" class="nav-link">
                                Войти
                            </router-link>
                        </li>
                        <li class="nav-item"> 
                            <a class="nav-link" href="#">Регистрация</a> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <br>
    </div>
</template>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'pizza-navbar',
        components: {

        },
        props: {},
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters([
                'USERNAME',
                'LOGGED_IN',

            ]),
            
        },
        methods: {
            ...mapActions([
                // 'GET_CATEGORIES_FROM_API',
                // 'SELECT_CATEGORY_PRODUCTS',
                // 'GET_PRODUCTS_OF_CATEGORY_FROM_API',
            ]),
        },
        mounted() {
        },

    }
</script>


<style>
    /* .pizza-navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto; 
     } */

</style>

