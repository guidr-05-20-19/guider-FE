import {
    DELETE_START,
    DELETE_SUCCESS,
    DELETE_FAILURE
  } from '../actions';


  const initialState = {
    deletingTrip: false,
    error:null
    
  };


  export const deleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_START:
        return {
          ...state,
          deletingTrip: true,
          error: null
  
        };
  
        case DELETE_SUCCESS:
        return {
          ...state,
          trips: action.payload,
          deletingTrip: false,
          error: null,
        };
  
        case DELETE_FAILURE:
        return {
          ...state,
          deletingTrip: false,
          error: action.payload
        };

      default:
        return state;
    }
  };