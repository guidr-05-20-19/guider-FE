

import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_START
  } from '../actions';
  
  const initialState = {
<<<<<<< HEAD
    error: null,
    isLoggingIn: false
  };

=======
    error: '',
    fetchingData: false,
    trips: [],
    isLoggingIn: false,
    token: localStorage.getItem('token')
  };
  
>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
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
<<<<<<< HEAD
=======
      
      case LOGIN_FAILURE:
          return {
            ...state,
            isLoggingIn: false,
            error: action.payload
          }

>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
      default:
        return state;
    }
  };
<<<<<<< HEAD
  
  
  



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
=======
  
>>>>>>> a8c4452940987a58edc238a157fd5a65956e63bf
