import {
    UPDATE_TRIP_START,
    UPDATE_TRIP_SUCCESS,
    UPDATE_TRIP_FAILURE
   } from '../actions';
 
 
   const initialState = {
     trips: [],
     isUpdating: true,
     error:null
     // Array characters, Boolean fetching, null error.
   };
 
   export const updateTripReducer = (state = initialState, action) => {
     switch (action.type) {
         case UPDATE_TRIP_START:
         return {
           ...state,
           isUpdating: true,
           error: null
   
         };
         case UPDATE_TRIP_SUCCESS:
         return {
           ...state,
           trips: action.payload,
           isUpdating: false,
           error: null,
         };
   
         case UPDATE_TRIP_FAILURE:
         return {
           ...state,
           isUpdating: false,
           error: action.payload
         };
 
         default:
         return state;
     }
   };
 