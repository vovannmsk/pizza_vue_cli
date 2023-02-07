export default {
    // GET_SEARCH_VALUE_TO_VUEX ({commit}, value) {
    //   commit('SET_SEARCH_VALUE_TO_VUEX', value)
    // },
    // SET_MOBILE({commit}) {
    //   commit('SWITCH_MOBILE')
    // },
    // SET_DESKTOP({commit}) {
    //   commit('SWITCH_DESKTOP')
    // },

    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    SELECT_CATEGORY_PRODUCTS({commit}, index) {
      commit('SELECT_CATEGORY', index)
    },
    SELECT_PRODUCT_FROM_CATALOG({commit}, index) {
      // console.log(index)
      commit('SELECT_PRODUCT', index)
    },
    /**
    * записываем product в хранилище (в product: {},)
    */
    SET_PRODUCT_FROM_CATALOG({commit}, product) {
      // console.log(product)
      commit('SET_PRODUCT_TO_STATE', product)
    },
  }