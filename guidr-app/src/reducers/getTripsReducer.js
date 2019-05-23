import {
    FETCH_TRIPS_START,
    FETCH_TRIPS_SUCCESS,
    FETCH_TRIPS_FAILURE
  } from '../actions';


  const initialState = {
    trips: [],
    isLoading: true,
    error:null
    // Array characters, Boolean fetching, null error.
  };


  export const getTripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TRIPS_START:
        return {
          ...state,
          isLoading: true,
          error: null
  
        };
        case FETCH_TRIPS_SUCCESS:
        return {
          ...state,
          trips: action.payload,
          isLoading: false,
          error: null,
        };
  
        case FETCH_TRIPS_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        };
  
         // Fill me in with the important reducers
      // action types should be FETCHING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
      default:
        return state;
    }
  };
  