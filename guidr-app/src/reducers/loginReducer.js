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
    isLoggingIn: false
  };
  
  const loginReducer = (state = initialState, action) => {
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
    //   case FETCH_TRIPS_START:
    //     return {
    //       ...state,
    //       fetchingData: true,
    //       error: false
    //     };
    //   case FETCH_TRIPS_SUCCESS:
    //     return {
    //       ...state,
    //       fetchingData: false,
    //       error: '',
    //       gasPrices: action.payload
    //         .filter(price => price.type === 'Gasoline - Regular')
    //         .filter(
    //           price =>
    //             price.location === 'US' || price.location === 'State of Hawaii'
    //         )
        // };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  



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