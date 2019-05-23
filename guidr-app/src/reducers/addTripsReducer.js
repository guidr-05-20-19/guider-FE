import {
    ADD_TRIPS_START,
    ADD_TRIPS_SUCCESS,
    ADD_TRIPS_FAILURE
  } from '../actions';


  const initialState = {
    trips: [],
    addingTrip: false,
    error:null
    
  };


  export const addTripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRIPS_START:
        return {
          ...state,
          addingTrip: true,
          error: null
  
        };
  
        case ADD_TRIPS_SUCCESS:
        return {
          ...state,
          trips: action.payload,
          addingTrip: false,
          error: null,
        };
  
        case ADD_TRIPS_FAILURE:
        return {
          ...state,
          addingTrip: false,
          error: action.payload
        };

      default:
        return state;
    }
  };
  