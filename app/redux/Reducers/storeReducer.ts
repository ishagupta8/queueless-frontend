import {
    GET_STORE_INFO,
    GET_USER_SESSION
} from '../constants';

  const initialState = {
    storeList:[
        {
          storeId:'001',
          name:"DMart",
          add1:"B-19, Sector-A",
          distance:"0.96KM",
          status:"Open",
          storeImgBig:'https://hbs-noq.s3.ap-south-1.amazonaws.com/dmartXHD.png',
          storeImgSmall:'https://hbs-noq.s3.ap-south-1.amazonaws.com/dmartMD.png',
        },
        {
          storeId:'002',
          name:"Metro",
          add1:"C-10, Sector-I",
          distance:"1.6KM",
          status:"Open",
          storeImgBig:'https://hbs-noq.s3.ap-south-1.amazonaws.com/metroXHD.png',
          storeImgSmall:'https://hbs-noq.s3.ap-south-1.amazonaws.com/metroMD.png'
          
        },
        {
          storeId:'003',
          name:"Big Bazaar",
          add1:"B-12, Sector-A",
          distance:"0.86KM",
          status:"Open",
          storeImgBig:'https://hbs-noq.s3.ap-south-1.amazonaws.com/bigbazzarXHD.png',
          storeImgSmall:'https://hbs-noq.s3.ap-south-1.amazonaws.com/bigbazzarMD.png'
        },
        {
          storeId:'004',
          name:"Organic Farm Shop",
          add1:"A-10, Sector-D",
          distance:"1.2KM",
          status:"Open",
          storeImgBig:'https://hbs-noq.s3.ap-south-1.amazonaws.com/farmshopXHD.png',
          storeImgSmall:'https://hbs-noq.s3.ap-south-1.amazonaws.com/farmshopMD.png'
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
            selectedStore: [...arr],
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