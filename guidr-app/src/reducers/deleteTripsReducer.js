import {
    DELETE_TRIP_START,
    DELETE_TRIP_SUCCESS,
    DELETE_TRIP_FAILURE
  } from '../actions';


  const initialState = {
    error: null,
    isDeleting: false,
    trips: []
    // Array characters, Boolean DELETEing, null error.
  };


  export const deleteTripsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TRIP_START:
        return {
          ...state,
          isDeleting: true,
          error: null
  
        };
        case DELETE_TRIP_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          trips: action.payload,
          isDeleting: false,
          error: null,
        };
        case DELETE_TRIP_FAILURE:
        return {
          ...state,
          isDeleting: false,
          error: action.payload
        };
  
         // Fill me in with the important reducers
      // action types should be DELETEING, SUCCESS and FAILURE
      // your switch statement should handle all of these cases.
      default:
        return state;
    }
  };
  