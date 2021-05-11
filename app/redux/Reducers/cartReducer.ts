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
    sku:string,
    item_qty:number,
    product_id:string,
  }

const cartReducer = (initialState:Item[]=[],action) => {
    switch (action.type) {
        case ADD_TO_CART:{
            let index=-1;
            index = initialState.findIndex(item=> item.sku===action.payload.sku); 
            if(index!=-1)
            {
                const newArray = [...initialState]; 
                console.log("newarray",newArray);
                newArray[index].item_qty=newArray[index].item_qty+1;
                initialState = [...newArray];

                return  initialState
                   
            }

            else{

                return initialState.concat(action.payload);
            }
        }

        case INCREMENT_ITEM:
            {

                const index = initialState.findIndex(item=> item.sku===action.payload.sku);
                const newArray = [...initialState]; 
                console.log("newarray",newArray);
                newArray[index].item_qty=newArray[index].item_qty+1;
                initialState = [...newArray];
                       
            return  initialState;
            }

        case DECREMENT_ITEM:
            {
                const index = initialState.findIndex(item=> item.sku===action.payload.sku); 
                const newArray = [...initialState]; 
                console.log("newarray",newArray);
                newArray[index].item_qty=newArray[index].item_qty-1;
                initialState = [...newArray];
                       
            return  initialState;
                
            }

        case REMOVE_FROM_CART:
            {
                initialState = initialState.filter(Item => Item.sku !== action.payload.sku)
                console.log("########################### remove from cart",initialState);
            return initialState
            }

        case CLEAR_CART:
           return initialState = []
        
        default:
            return initialState;

}
};

export default cartReducer;