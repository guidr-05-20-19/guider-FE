import {
    LOGIN_SUCCESS,
    LOGIN_ABSOLUTE_FAILURE,
    LOGIN_START
    // FETCH_TRIPS_START,
    // FETCH_TRIPS_SUCCESS,
    // FETCH_TRIPS_FAILURE
  } from '../actions';
  
  const initialState = {
    error: '',
    fetchingData: false,
    trips: [],
    isLoggingIn: false,
    token: localStorage.getItem('token')
  };
  
  export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_START:
        return {
          ...state,
          isLoggingIn: true,
          error: ''
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggingIn: false
        };

      default:
        return state;
    }
  };
  