import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import store from "./vuex/store"
// import router from "./router/router"

//import './assets/styles/styles.scss'

createApp(App)
.use(store)
// .use(router)
//.cors({origin: "*",})
.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
