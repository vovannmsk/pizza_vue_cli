import axios from "axios";

export default {
  GET_PRODUCTS_FROM_API({commit}) {
    return axios('http://localhost:8000/api/v1/generic/list/', {
      method: "GET"
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);
        return products;
      })
      .catch((error) => {
        console.log('ЖОПА!!!', error)
        return error;
      })
  },
}