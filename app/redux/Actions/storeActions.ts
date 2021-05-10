import {
    GET_STORE_INFO,
} from '../constants';


export const getStoreData = (payload) => {
    return {
        type: GET_STORE_INFO,
        payload
    }
}

