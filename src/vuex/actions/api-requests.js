import axios from "axios";
import store from "../store";

export default {
  /**
  * добавление нового заказа+товаров в базу (через API) /с отправкой токена/
  */
  POST_ORDER_PLUS_ITEMS_TO_API(context, dataForm) {
    let password = `Bearer ${this.state.accessToken}`;
    axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/orders/api/v1/generic/create_order/',
          data: dataForm,
          headers: 
            { 
              // Authorization: `Bearer ${this.state.accessToken}`, 
              Authorization: password, 
            } 
        })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
            console.log(response.data);
            store.state.order_id = response.data.id;  //сохранили текущий номер заказа в хранилище. нужно?
            let order_id = response.data.id; // или достаточно сохранить номер заказа во временной переменной
            //=========== часть 2. Сохранение товаров заказа =======================
            for (let item of store.getters.CART) {
              // fields = ['id', 'pk', 'order', 'product', 'price', 'quantity']   это поля в API
              axios({
                method: 'post',
                url: 'http://localhost:8000/orders/api/v1/generic/create_order_item/',
                data: {
                  "order": order_id, //store.state.order_id,
                  "product": item.id,
                  "price": parseFloat(item.currentPrice).toFixed(2),
                  "quantity": item.quantity
                },
                headers: 
                  { 
                    Authorization: password, 
                  } 
              })
                .then(function(response) {
                  console.log(response.data);
                  store.state.cart=[];
                  // console.log(store.state.cart);
              })
                .catch(function(error) {
                  console.log('Ошибка ORDER_ITEM ' + error);
              });
            }
        })
          .catch(function(error) {
            console.log('Ошибка ORDER ' + error);
        });
  },


  /**
  * добавление нового заказа в базу (через API) /с отправкой токена/  --не используется---
  */
  POST_ORDER_ITEM_TO_API(context, dataForm) {
    axios({
          method: 'post',
          url: 'http://localhost:8000/orders/api/v1/generic/create_order_item/',
          data: dataForm,
          headers: 
            { 
              Authorization: `Bearer ${this.state.accessToken}`, 
            } 
        })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
            console.log(response.data);
            // store.state.order_id = response.data.id;
            // console.log(store.state.order_id);
        })
          .catch(function(error) {
            console.log('Ошибка ORDER_ITEM ' + error);
        });
  },

  /**
  * добавление нового заказа в базу (через API) /с отправкой токена/  не используется
  */
  POST_ORDER_TO_API(context, dataForm) {
    axios({
          method: 'post',
          url: 'http://127.0.0.1:8000/orders/api/v1/generic/create_order/',
          data: dataForm,
          headers: 
            { 
              Authorization: `Bearer ${this.state.accessToken}`, 
            } 
        })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
            console.log(response.data);
            store.state.order_id = response.data.id;
            // console.log(store.state.order_id);
        })
          .catch(function(error) {
            console.log('Ошибка ORDER ' + error);
        });
  },

  /**
  * переход в админку Django
  */
  TO_ADMINKA_API() {
    axios({
          method: 'get',
          url: 'http://127.0.0.1:8000/admin/',
          headers: 
            { 
              Authorization: `Bearer ${this.state.accessToken}`, 
            } 
        })
          .then(function() {
            console.log('Ответ сервера успешно получен!');
        })
          .catch(function(error) {
            console.log('Опять ошибка ' + error);
        });
  },

  /**
  * добавление нового отзыва (в API) /с отправкой токена/
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
    return axios.get('http://localhost:8000/api/v1/generic/list', 
                      { headers: { Authorization: `Bearer ${this.state.accessToken}` } }
                    )
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

  // GET_PRODUCT_FROM_API({commit}) {
  //   // console.log(store.state.selectedProduct)
  //   return axios.get('http://localhost:8000/api/v1/list/' + store.state.selectedProduct)
  //               .then((product) => {
  //                 commit('SET_PRODUCT_TO_STATE', product.data);
  //                 return product
  //               }).catch((error) => {
  //                 console.log(error)
  //                 return error;
  //               })
  // },
  
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
                  // console.log("количество отзывов API = " + feedbacks.data.length)
                  commit('SET_MY_FEEDBACKS_TO_STATE', feedbacks.data);
                  return feedbacks
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },

  /**
   * получение списка заказов юзера (из API) с отправкой токена
   */
  GET_ORDERS_FROM_API({commit}) {
    return axios.get('http://localhost:8000/orders/api/v1/generic/my_orders/', 
                      { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                .then((orders) => {
                  commit('SET_ORDERS_TO_STATE', orders.data);  //список заказов из API помещаем в myOrders
                  return orders
                }).catch((error) => {
                  console.log(error)
                  return error;
                })
  },
  /**
   * получение списка продуктов в выбранном заказе (из API) с отправкой токена
   */
  GET_PRODUCTS_ORDER_FROM_API({commit}, pk) {
    return axios.get('http://localhost:8000/orders/api/v1/generic/order_items/'+ pk, 
                      { headers: { Authorization: `Bearer ${this.state.accessToken}` } })
                .then((products) => {
                  commit('SET_PRODUCTS_ORDER_TO_STATE', products.data);   // список продуктов из выбранного
                                                                          // заказа помещаем в productsOrder
                  return products
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