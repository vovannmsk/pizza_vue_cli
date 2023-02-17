export default {
    SET_CATEGORIES_TO_STATE: (state, categories) => {
        // state.categories = categories.results;
        state.categories = categories;
        state.categories[state.categories.length] = {
            "id": 0,
            "pk": 0,
            "nameOfType": "Все категории",
            "slug": "all"
        }
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },
    SET_PRODUCT_TO_STATE: (state, product) => {
        state.product = product;
    },
    SET_FEEDBACKS_TO_STATE: (state, feedbacks) => {
        state.feedbacks = feedbacks;
    },
    SET_MY_FEEDBACKS_TO_STATE: (state, feedbacks) => {
        // console.log("количество отзывов = "+feedbacks.length)
        state.myFeedbacks = feedbacks;
    },
    SET_CURRENT_PAGE: (state, index) => {
        state.currentPage = index;
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
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
        }
    },
    SELECT_CATEGORY: (state, category) => {
        // console.log('category= '+category.nameOfType);
        state.selectedCategory = category
    },
    SELECT_PRODUCT: (state, pk) => {
        //console.log(pk);
        state.selectedProduct = pk
    },
    SET_MIN_PRICE_TO_STATE: (state, price) => {
        // console.log('min= '+price);
        state.minPrice = price;
    },
    SET_MAX_PRICE_TO_STATE: (state, price) => {
        // console.log('max= '+price);
        state.maxPrice = price;
    },
    SET_FILTER_PRODUCTS: (state, products) => {
        state.filteredProducts = products;
    },
    SET_FILTERED_PRODUCTS_TO_STATE: (state) => {
        // отбор по категории
        let prod = []
        let category = state.selectedCategory.nameOfType
        if (category === 'Все категории') {
            state.filteredProducts = state.products;
        } else {
            state.products.map(function (item) {
            if (item.type_product === category) {
                prod.push(item);
            }
            });
            state.filteredProducts = prod;
        }
        // отбор по цене
        prod = []
        state.filteredProducts.map(function (item) {
            if (item.currentPrice >= state.minPrice && item.currentPrice <= state.maxPrice) {
                prod.push(item);
            }
        });
        state.filteredProducts = prod;
        // console.log('фильтры:'+' min:'+state.minPrice+' max:'+state.maxPrice+' cat:'+category)
        // console.log('длина:'+prod.length)
    },
    UPDATE_STORAGE (state, { access, refresh }) {
        //console.log(access)
        state.accessToken = access;
        state.refreshToken = refresh;
    },
    DESTROY_TOKEN (state) {
        state.accessToken = null
        state.refreshToken = null
    },
    SET_USERNAME: (state, name) => {
        state.username = name;
    },
    SET_NEXT_ROUTER: (state, to) => {
        state.toRouter = to;
    },
}