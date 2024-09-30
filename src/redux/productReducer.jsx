const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT"
const SET_PRODUCTS = "SET_PRODUCTS"
const ADD_TO_CART = "ADD_TO_CART"
const INCREMENT_QUANTITY = "INCREMENT_QUANTITY"
const DECREMENT_QUANTITY = "DECREMENT_QUANTITY"
const DELETE_ORDER = "DELETE_ORDER"
const CLEAR_CART = "CLEAR_CART"

const initialState = {
    selectedProduct: "",
    products: [],
    cart: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_PRODUCT:
            return {...state, selectedProduct: action.productID}
        case SET_PRODUCTS:
            return {...state, products: action.products}
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.order]}
        case INCREMENT_QUANTITY:
            const incremented = state.cart.map(order => order.productID == action.productID ? {...order, quantity: order.quantity+1}: order)
            return {...state, cart: incremented}
        case DECREMENT_QUANTITY:
            const decremented = state.cart.map(order => order.productID == action.productID ? {...order, quantity: order.quantity-1}: order)
            return {...state, cart: decremented}
        case DELETE_ORDER:
            const deleted  = state.cart.filter(order => order.productID != action.productID)
            return {...state, cart: deleted}
        case CLEAR_CART:
            return {...state, cart: []}
        default:
            return state;
    }
}

// AC for Action Creator
export const setSelectedProductAC = (id) => {
    return {
        type: SET_SELECTED_PRODUCT,
        productID: id
    }
}
export const setProductsAC = (productsArray) => {
    return {
        type: SET_PRODUCTS,
        products: productsArray
    }
}
export const addOrderToCartAC = (order) => {
    return {
        type: ADD_TO_CART,
        order
    }
}
export const incrementQuantityAC = (productID) => {
    return {
        type: INCREMENT_QUANTITY,
        productID
    }
}
export const decrementQuantityAC = (productID) => {
    return {
        type: DECREMENT_QUANTITY,
        productID
    }
}
export const deleteOrderAC = (productID) => {
    return {
        type: DELETE_ORDER,
        productID
    }
}
export const clearCartAC = () => {
    return {
        type: CLEAR_CART
    }
}