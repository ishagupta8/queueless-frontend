import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    INCREMENT_ITEM,
    DECREMENT_ITEM
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

export const incrementItem = (payload:Item) => {
    return {
        type: INCREMENT_ITEM,
        payload
    }
}

export const decrementItem = (payload:Item) => {
    return {
        type: DECREMENT_ITEM,
        payload
    }
}

export const removeFromCart = (payload:Item) => {
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