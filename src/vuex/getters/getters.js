export default  {
  PRODUCTS(state) {
    return state.products;
  },
  CART(state) {
    return state.cart;
  },
  
  /**
   * список категорий. отсортирован по id
   */
  CATEGORIES(state) {
    return state.categories.sort((a, b) => ( (a.id > b.id) ? 1 : -1 ));
    // список категорий отсортирован по id
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