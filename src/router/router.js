// import { createApp } from 'vue'
// import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import pizzaCatalog from '../components/pizza-catalog.vue'
import pizzaCart from '../components/pizza-cart.vue'
// import pizzaWrapper from '../components/pizza-wrapper.vue'



const router = createRouter ({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'catalog',
            // component: pizzaWrapper
            component: pizzaCatalog,
        },
        {
            path: '/cart',
            name: 'cart',
            component: pizzaCart,
            // props: true,
        },
    ]
})

export default router;