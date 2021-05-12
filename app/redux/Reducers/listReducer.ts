import {
    ADD_TO_LIST,
    REMOVE_FROM_LIST,
} from '../constants';



const listReducer = (initialState=[],action) => {
    switch (action.type) {
        case ADD_TO_LIST:{
            return initialState.concat(action.payload);
            
        }

        case REMOVE_FROM_LIST:
            {
                initialState = initialState.filter(ListItem => ListItem !== action.payload)
                console.log("########################### remove from list",initialState);
            return initialState
            }
        
        default:
            return initialState;

}
};

export default listReducer;