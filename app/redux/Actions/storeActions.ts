import {
  GET_STORE_DETAILS,
  GET_STORE_INFO,
  GET_USER_SESSION,
} from '../constants';

export const getStoreData = payload => {
  return {
    type: GET_STORE_INFO,
    payload,
  };
};

export const getStoreDetails = payload => {
  return {
    type: GET_STORE_DETAILS,
    payload,
  };
};

export const getUserSession = payload => {
  return {
    type: GET_USER_SESSION,
    payload,
  };
};
