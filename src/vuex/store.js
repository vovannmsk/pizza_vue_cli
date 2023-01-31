//import Vue from 'vue'
//import Vuex from 'vuex'
import axios from 'axios'

//Vue.use(Vuex);

import { createStore } from 'vuex'
 
export default createStore({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product)=> {
      if (state.cart.length) {
        let isProductExists = false
        state.cart.map(function(item) {
          if (item.pk===product.pk) {
            isProductExists = true;
            item.quantity++;
          }
        })
        if (!isProductExists) {
          product.quantity = 1
          state.cart.push(product);          
        }
      } else {
        product.quantity = 1
        state.cart.push(product);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios.get('http://localhost:8000/api/v1/generic/list'
      )
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data);
          return products
        }).catch((error) => {
          console.log(error)
          return error;
        })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
  computed: {
    // totalPrice: function() {
    //   return this.cart_item_data.currentPrice * this.cart_item_data.quantity
    // },
    // totalSumma: function() {
    //   let summa = 0
    //   console.log(this.cart.length)
    //   for (let item of this.cart) {
    //     summa = summa + item.currentPrice * item.quantity
    //   }
    //   console.log(summa)
    //   return summa
    // }
    

  },
  modules: {  }
})


//import commonActions from './actions/actions'
//import apiRequests from './actions/api-requests'
//import mutations from "./mutations/mutations"
//import getters from "./getters/getters";

//const actions = {...commonActions, ...apiRequests}

