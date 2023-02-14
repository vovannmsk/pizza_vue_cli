import { createRouter, createWebHistory } from 'vue-router'

import pizzaWrapperCatalog from '../components/catalog/pizza-wrapper-catalog.vue'
import pizzaCart from '../components/cart/pizza-cart.vue'
import pizzaWrapperProduct from '../components/product/pizza-wrapper-product.vue'
import pizzaMain from '../components/pizza-main.vue'
import pizzaContacts from '../components/pizza-contacts.vue'
import pizzaLogin from '../components/auth/pizza-login.vue'
import pizzaLogout from '../components/auth/pizza-logout.vue'
import pizzaMyFeedbacks from '../components/feedbacks/pizza-my-feedbacks.vue'
import pizzaPostFeedback from '../components/feedbacks/pizza-post-feedback.vue'

const router = createRouter ({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'main',
            component: pizzaMain,
            // props: true,
        },
        {
            path: '/catalog',
            name: 'wrapperCatalog',
            component: pizzaWrapperCatalog,
            //props: true,
            meta: {
                requiresLogin: true
            }
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
            path: '/contacts',
            name: 'contacts',
            component: pizzaContacts,
            // props: true,

        },
        {
            path: '/login',
            name: 'login',
            component: pizzaLogin,
        },
        {
            path: '/logout',
            name: 'logout',
            component: pizzaLogout,
        },
        {
            path: '/feedbacks',
            name: 'myFeedbacks',
            component: pizzaMyFeedbacks,
            meta: {
                requiresLogin: true
            }
        },
        {
            path: '/feedback',
            name: 'postFeedback',
            component: pizzaPostFeedback,
            meta: {
                requiresLogin: true
            }
        },
    ]
})

export default router;