const ex = [
    {
        id: "12345",
        userName: "Palenshiev Tolenshe",
        password: "Something",
        carts: [
            {
                date: "2020-02-03",
                products: [
                    {
                        productID: 1,
                        quantity: 1
                    }
                ]
            }
        ]
    } 
]


const ADD_TO_CART = "ADD_TO_CART"

const initialState = [
    {
        id: "12345",
        userName: "Nurdaulet Shinpolatov",
        password: "Something",
        carts: [
            {
                id: 1,
                date: "5-25-2023",
                products: []
            }
        ]
    }
]

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return state.map(user => {
                if (user.id == action.userID) {
                    user.carts.map(cart => {
                        if (cart.id == action.cartID) {
                            cart.products = [...cart.products, action.order]
                        }
                        return cart
                    })
                }
                return user
            })
        default:
            return state
    }
}

export const addToCartAC = (userID, cartID, order) => {
    return {
        type: ADD_TO_CART,
        userID,
        cartID,
        order
    }
}