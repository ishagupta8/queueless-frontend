import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from '../constants';

// interface Item {
//     name: string,
//     image: string,
//     price: string,
//     max_qty: string,
//   }

//   const initialState:Item[] = {
//       []
//   }

const cartReducer = (initialState=[], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            return initialState.concat(action.payload)
            
        // case REMOVE_FROM_CART:
        //     return state.filter(cartItem => cartItem !== action.payload)
        // case CLEAR_CART:
        //     return state = []
        default:
            return initialState;

}
};

export default cartReducer;