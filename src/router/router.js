import Vue from 'vue'
import Router from 'vue-router'
import pizzaCatalog from '../components/pizza-catalog.vue'
import pizzaCart from '../components/pizza-cart.vue'

Vue.useAttrs(Router);

let router = new Router ({
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: pizzaCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: pizzaCart
        },
    ]


})

export default router;