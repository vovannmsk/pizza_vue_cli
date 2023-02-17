import axios from "axios";
import store from "../store";

export default {
  /**
 * получение списка продуктов (из API) с отправкой токена
 */
  POST_FEEDBACK_TO_API(context, dataForm) {
      axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/api/v1/generic/feedback/',
            data: dataForm,
            headers: 
              { 
                Authorization: `Bearer ${this.state.accessToken}`, 
              } 
          })
            .then(function(response) {
              console.log('Ответ сервера успешно получен!');
              console.log(response.data);
          })
            .catch(function(error) {
              console.log('Опять ошибка ' + error);
          });
  },

  /**
   * получение списка продуктов (из API) с отправкой токена
   */
  GET_PRODUCTS_FROM_API({commit}) {
    // console.log ('access in API = '+this.state.accessToken)
    return axios.get('http://localhost:8000/api/v1/generic/list', 
                      { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                .then((products) => {
                  commit('SET_PRODUCTS_TO_STATE', products.data);  //список продуктов из API помещаем в products
                  commit('SET_FILTER_PRODUCTS', products.data);    // и в filteredProducts
                  return products
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
  /**
   * список категорий товаров (из API)
   */  
  GET_CATEGORIES_FROM_API({commit}) {
    return axios.get('http://localhost:8000/api/v1/generic/cat')
                .then((categories) => {
                  commit('SET_CATEGORIES_TO_STATE', categories.data);
                  return categories
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
  /**
   * получение одного продукта (из API)
   */
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
  /**
   * получение отзывов на один продукт (из API)
   */
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
  USER_LOGIN (context, usercredentials) {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:8000/api-token/', {
        username: usercredentials.username,
        password: usercredentials.password
      })
        .then(response => {
          context.commit('UPDATE_STORAGE', { access: response.data.access, refresh: response.data.refresh }) 
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  /**
  * получение отзывов текущего пользователя (из API)
  */
  GET_MY_FEEDBACKS_FROM_API({commit}) {
    return axios.get('http://127.0.0.1:8000/api/v1/generic/feedbacks/',
                    { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                .then((feedbacks) => {
                  console.log("количество отзывов API = " + feedbacks.data.length)
                  commit('SET_MY_FEEDBACKS_TO_STATE', feedbacks.data);
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
  // GET_PRODUCTS_FROM_API({commit}, pagination_url) {
  //   return axios.get(pagination_url)
  //               .then((products) => {
  //                 commit('SET_PRODUCTS_TO_STATE', products.data);
  //                 return products
  //               }).catch((error) => {
  //                 console.log(error)
  //                 return error;
  //               })
  // },
}