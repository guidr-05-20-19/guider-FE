

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START,
    FETCH_TRIPS_START,
    FETCH_TRIPS_SUCCESS,
  } from '../actions';
  
  const initialState = {
    error: null,
    isLoggingIn: false,
    // token: localStorage.getItem('token')
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
        
        case FETCH_TRIPS_START:
          return {
            ...state,
            fetchingData: true,
            error: false
          };

        case FETCH_TRIPS_SUCCESS:
          console.log(action.payload)
          return {
            ...state,
            fetchingData: false,
            error: null,
            trips: action.payload
          };
        default:
          return state;
      }
  

  };
  
  
  



// import {LOGIN_START,
//  LOGIN_SUCCESS,
//  LOGIN_FAILURE,
// } from '../actions';


// const initialState={
//     error:null,
//     fetchingData:false,
//     LoggingIn:false
// }

// const reducer = (state = initialState, action )=>{
//     switch (action.type){
//         case LOGIN_START:
//             return {
//                 ...state,
//                 LoggingIn: true,
//                 error: null
//             };
//         case LOGIN_SUCCCESS:
//             return {
//                 ...state,
//                 LoggingIn: false,
//                 error: null
//             };
//         default:
//         return state;



//     }




// }
