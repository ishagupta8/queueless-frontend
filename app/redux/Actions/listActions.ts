import {
    ADD_TO_LIST,
    REMOVE_FROM_LIST,
  } from '../constants';
  
  export const addListItem = payload => {
    return {
      type: ADD_TO_LIST,
      payload,
    };
  };
  
  export const removeListItem = payload => {
    return {
      type: REMOVE_FROM_LIST,
      payload,
    };
  };
  

  