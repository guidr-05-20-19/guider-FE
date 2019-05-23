import {
   ADD_TRIP_START,
   ADD_TRIP_SUCCESS,
   ADD_TRIP_FAILURE
  } from '../actions';


  const initialState = {
    trips: [],
    isAdding: true,
    error:null
    // Array characters, Boolean fetching, null error.
  };

  export const addTripReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRIP_START:
        return {
          ...state,
          isAdding: true,
          error: null
  
        };
        case ADD_TRIP_SUCCESS:
        return {
          ...state,
          trips: action.payload,
          isAdding: false,
          error: null,
        };
  
        case ADD_TRIP_FAILURE:
        return {
          ...state,
          isAdding: false,
          error: action.payload
        };

        default:
        return state;
    }
  };
