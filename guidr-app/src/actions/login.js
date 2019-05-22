import axios from 'axios';


export const LOGIN_START='LOGIN_START';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILURE='LOGIN_FAILURE';

export const login = creds => dispatch => {
dispatch ({type: LOGIN_START});
  return axios
    .post('https://tristan-guidr.herokuapp.com/user',creds)
    .then(res => {
        console.log(res)
        // the below 2 lines set the token for the user when they are logged-in.
        localStorage.setItem('token', res.data.payload)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
        console.log(err)

    })
};
