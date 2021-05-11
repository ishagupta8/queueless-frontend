import {
    GET_STORE_INFO, GET_USER_SESSION,
} from '../constants';


export const getStoreData = (payload) => {
    return {
        type: GET_STORE_INFO,
        payload
    }
}

export const getUserSession = (payload) => {
    return {
        type: GET_USER_SESSION,
        payload
    }
}

