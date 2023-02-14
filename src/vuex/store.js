import commonActions from './actions/actions.js'
import apiRequests from './actions/api-requests.js'
import mutations from './mutations/mutations.js'
import getters from './getters/getters'
import { createStore } from 'vuex'

const actions = {...commonActions, ...apiRequests}  //склейка двух файлов в один actions

export default createStore({
  state: {
    // список товаров, полученных из API
    products: [],
    // список товаров в корзине
    cart: [],
    // список категорий товаров (из API)
    categories: [],
    // выбранная категория товаров
    selectedCategory: {
      "id": 0,
      "pk": 0,
      "nameOfType": "Все категории",
      "slug": "all"
    },
    // продукт для детального просмотра
    product: {},
    // id продукта, выбранного для детального просмотра (нужен???)
    selectedProduct: 0,
    // отзывы по выбранному товару
    feedbacks: [],
    // фильтры. минимальная цена товара
    minPrice: 0,
    // фильтры. максимальная цена товара
    maxPrice:2500,
    // фильтры. уже отфильтрованный список товаров
    filteredProducts: [],
  },
  getters,
  mutations,
  actions,
  methods: {  },
  computed: {  },
  modules: {  },
})

