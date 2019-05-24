

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START,
  } from '../actions';
  
  const initialState = {
    error: null,
    isLoggingIn: false,
    token: localStorage.getItem('token')
  };

  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isLoggingIn: true,
          error: null
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false,
          token: action.payload
        };

        case LOGIN_FAILURE:
          return {
            ...state,
            isLoggingIn: false,
            error: action.payload
          }
  
        default:
          return state;
      }
  

  };
  