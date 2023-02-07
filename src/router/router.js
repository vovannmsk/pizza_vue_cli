// import { createApp } from 'vue'
// import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import pizzaWrapperCatalog from '../components/catalog/pizza-wrapper-catalog.vue'
import pizzaCart from '../components/cart/pizza-cart.vue'
import pizzaWrapperProduct from '../components/product/pizza-wrapper-product.vue'



const router = createRouter ({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'wrapperCatalog',
            // name: 'catalog',
            component: pizzaWrapperCatalog,
        },
        {
            path: '/cart',
            name: 'cart',
            component: pizzaCart,
            // props: true,
        },
        {
            path: '/product',
            name: 'product',
            component: pizzaWrapperProduct,
            props: true,
        },

    ]
})

export default router;