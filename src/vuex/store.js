import commonActions from './actions/actions.js'
import apiRequests from './actions/api-requests.js'
import mutations from './mutations/mutations.js'
import getters from './getters/getters'
import { createStore } from 'vuex'

const actions = {...commonActions, ...apiRequests}  //склейка двух файлов в один actions

export default createStore({
  state: {
    products: [],
    cart: [],
    categories: [],
    selectedCategory: 0,
    product: {},
    selectedProduct: 0,
    feedbacks: [],
  },
  getters,
  mutations,
  actions,
  methods: {  },
  computed: {  },
  modules: {  },
})

