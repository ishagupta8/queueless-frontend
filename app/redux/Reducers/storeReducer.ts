import {
    GET_STORE_INFO,
    GET_USER_SESSION
} from '../constants';

  const initialState = {
    storeList:[
        {
          storeId:'001',
          name:"DMart",
          add1:"B - 19, Sector-A",
          distance:"0.96KM",
          status:"Open",
          storeImg:'dmart.png',
        },
        {
          storeId:'002',
          name:"Metro",
          add1:"3rd Stage, HSR",
          distance:"1.6KM",
          status:"Open",
          storeImg:'metro.png', 
        },
        {
          storeId:'003',
          name:"Big Bazaar",
          add1:"3rd Stage, HSR",
          distance:"1.6KM",
          status:"Open",
          storeImg:'metro.png', 
        },
        {
          storeId:'004',
          name:"Metro",
          add1:"3rd Stage, HSR",
          distance:"1.6KM",
          status:"Open",
          storeImg:'metro.png', 
        },
        {
          storeId:'005',
          name:"Metro",
          add1:"3rd Stage, HSR",
          distance:"1.6KM",
          status:"Open",
          storeImg:'metro.png', 
        },
      ],
    selectedStore:[],
    session:null,
    };
  

const storeReducer = (state = initialState,action) => {
    switch (action.type) {
        case GET_STORE_INFO:{
          let arr = state.storeList.filter(
            (id) => id.storeId == action.payload
          );
          return {
            ...state,
            selectedStore: arr,
          };
        }

        case GET_USER_SESSION:{
          return{
            ...state,
            session:action.payload,
          };
        }

        default:
            return state;
}
};

export default storeReducer;