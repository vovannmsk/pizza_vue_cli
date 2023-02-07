export default {
    SET_CATEGORIES_TO_STATE: (state, categories) => {
        state.categories = categories.results;
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
    SELECT_CATEGORY: (state, pk) => {
        state.selectedCategory = pk
    },
    SELECT_PRODUCT: (state, pk) => {
        //console.log(pk);
        state.selectedProduct = pk
    }
}