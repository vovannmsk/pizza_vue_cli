export default  {
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
  SELECTED_PRODUCT(state) {
    return state.selectedProduct;
  },

  /**
   * список категорий. отсортирован по id
   */
  CATEGORIES(state) {
    return state.categories.sort((a, b) => ( (a.id > b.id) ? 1 : -1 ));
  },
  CATEGORY(state) {
    // console.log(state.selectedCategory);
    return state.selectedCategory;
  }
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