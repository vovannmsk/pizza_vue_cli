import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import store from "./vuex/store"
import router from "./router/router"
import 'material-design-icons-iconfont'

/* import the fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
// library.add(faUserSecret)

// перед тем, как перейти по роутеру, проводятся проверки:
// 1. нужна ли аутентификация?
// 2. залогинился ли пользователь?
// при необходимости переходим на аутентификацию
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
      // console.log(from.name+" "+to.name)
      store.state.toRouter = to.name
      // console.log(store.getters.TO_ROUTER)
      if (!store.getters.LOGGED_IN) {
        next({ name: 'login' })
      } else {
        next()
      }
    } else {
      next()
    }
  })

createApp(App)
.use(store)
.use(router)
// .component('font-awesome-icon', FontAwesomeIcon)
//.cors({origin: "*",})
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
