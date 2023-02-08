// import { createApp } from 'vue'
// import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import pizzaWrapperCatalog from '../components/catalog/pizza-wrapper-catalog.vue'
import pizzaCart from '../components/cart/pizza-cart.vue'
import pizzaWrapperProduct from '../components/product/pizza-wrapper-product.vue'
import pizzaMain from '../components/pizza-main.vue'
import pizzaContacts from '../components/pizza-contacts.vue'

const router = createRouter ({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'wrapperCatalog',
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
        {
            path: '/main',
            name: 'main',
            component: pizzaMain,
            // props: true,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: pizzaContacts,
            // props: true,
        },
    ]
})

export default router;