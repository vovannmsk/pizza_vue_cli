import axios from "axios";
import store from "../store";

export default {
  GET_CATEGORIES_FROM_API({commit}) {
    return axios.get('http://localhost:8000/api/v1/generic/cat')
                .then((categories) => {
                  commit('SET_CATEGORIES_TO_STATE', categories.data);
                  return categories
                  // return categories.sort((prev, next)=> prev.id - next.id)
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
  GET_PRODUCTS_OF_CATEGORY_FROM_API({commit}, cat) {
    // console.log(cat)
    if (cat===0) {
      return axios.get('http://localhost:8000/api/v1/generic/list')
                  .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products
                  }).catch((error) => {
                    console.log(error)
                    return error;
                  })
    } else {
      return axios.get('http://localhost:8000/api/v1/generic/cat/'+cat)
                  .then((products) => {
                    commit('SET_PRODUCTS_TO_STATE', products.data);
                    return products
                  }).catch((error) => {
                    console.log(error)
                    return error;
                  })
    }
  },
  GET_PRODUCT_FROM_API({commit}) {
    // console.log(store.state.selectedProduct)
    return axios.get('http://localhost:8000/api/v1/list/' + store.state.selectedProduct)
                .then((product) => {
                  commit('SET_PRODUCT_TO_STATE', product.data);
                  return product
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
  GET_FEEDBACKS_FROM_API({commit}) {
    // console.log(store.state.selectedProduct)
    return axios.get('http://localhost:8000/api/v1/feedback/' + store.state.selectedProduct)
                .then((feedbacks) => {
                  commit('SET_FEEDBACKS_TO_STATE', feedbacks.data);
                  return feedbacks
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
    /**
   * получаем список продуктов по указанной ссылке
   * используется для пагинации
   */
  GET_PRODUCTS_FROM_API({commit}, pagination_url) {
    return axios.get(pagination_url)
                .then((products) => {
                  commit('SET_PRODUCTS_TO_STATE', products.data);
                  return products
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
}