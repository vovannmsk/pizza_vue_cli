export default  {
  ORDER_ID(state) {
    return state.order_id;
  },
  FILTERED_PRODUCTS(state) {
    return state.filteredProducts;
  },
  PRODUCTS(state) {
    return state.products;
  },
  CART(state) {
    return state.cart;
  },
  PRODUCT(state) {
    return state.product;
  },
  FEEDBACKS(state) {
    return state.feedbacks;
  },
  MY_FEEDBACKS(state) {
    return state.myFeedbacks;
  },
  SELECTED_PRODUCT(state) {
    return state.selectedProduct;
  },
  MIN_PRICE(state) {
    return state.minPrice;
  },
  MAX_PRICE(state) {
    return state.maxPrice;
  },
  CURRENT_PAGE(state) {
    return state.currentPage;
  },
  /**
   * список категорий. отсортирован по id
   */
  CATEGORIES(state) {
    return state.categories.sort((a, b) => ( (a.id > b.id) ? 1 : -1 ));
    // return state.categories;
  },
  CATEGORY(state) {
    // console.log(state.selectedCategory);
    return state.selectedCategory;
  },
  /**
  * токены для JWT
  */
  ACCESS_TOKEN(state) {
    return state.accessToken;
  },
  REFRESH_TOKEN(state) {
    return state.refreshToken;
  },
  /**
  * если залогинились, то true
  */
  LOGGED_IN(state) {
    return state.accessToken != null;
  },

  USERNAME(state) {
    return state.username;
  },
  TO_ROUTER(state) {
    return state.toRouter;
  },
  MY_ORDERS(state) {
    return state.myOrders;
  },
  PRODUCTS_ORDER(state) {
    return state.productsOrder;
  },
  TOTAL_AMOUNT(state) {
    return state.totalAmount;
  },

    // SEARCH_VALUE(state) {
    //   return state.searchValue;
    // },
    // IS_MOBILE(state) {
    //   return state.isMobile;
    // },
    // IS_DESKTOP(state) {
    //   return state.isDesktop;
    // },
    // PRODUCTS(state) {
    //   return state.products;
    // },
    // CART(state) {
    //   return state.cart;
    // }
  }