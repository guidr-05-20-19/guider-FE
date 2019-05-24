import {
    UPDATE_START,
    UPDATE_SUCCESS,
    UPDATE_FAILURE
  } from '../actions';

  const initialState = {
    updatingTrip: false,
    error:null,
    trips:[]
  };


  export const updateTripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_START:
        return {
          ...state,
          updatingTrip: true,
          error: null
  
        };
  
        case UPDATE_SUCCESS:
        return {
          ...state,
          trips: action.payload,
          updatingTrip: false,
          error: null,
        };
  
        case UPDATE_FAILURE:
        return {
          ...state,
          updatingTrip: false,
          error: action.payload
        };

      default:
        return state;
    }
  };