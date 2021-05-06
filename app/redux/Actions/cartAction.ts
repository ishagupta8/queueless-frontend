import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

interface Item {
        name: string,
        image: string,
        price: string,
        max_qty: string,
      }

export const addToCart = (payload:Item) => {
    return {
        type: ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}