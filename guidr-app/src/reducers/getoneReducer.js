import {
    GETONE_START,
    GETONE_SUCCESS,
    GETONE_FAILURE
  } from '../actions';


  const initialState = {
    getingoneTrip: false,
    onetrip: {},
    error:null
    
  };


  export const getoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETONE_START:
        return {
          ...state,
          getingoneTrip: true,
          error: null
  
        };
  
        case GETONE_SUCCESS:
        return {
          ...state,
          onetrip: action.payload,
          getingoneTrip: false,
          error: null,
        };
  
        case GETONE_FAILURE:
        return {
          ...state,
          getingoneTrip: false,
          error: action.payload
        };

      default:
        return state;
    }
  };