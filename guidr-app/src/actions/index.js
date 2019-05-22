import axios from 'axios';


export const LOGIN_START='LOGIN_START';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILURE='LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch ({ type: LOGIN_START });
  return axios
    .post('https://tristan-guidr.herokuapp.com/login',creds)
    .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        dispatch({type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => {
        dispatch({ type: LOGIN_FAILURE, payload: err})
    })
};


export const REG_GUIDE_ADD = 'REG_GUIDE_ADD';
export const REG_GUIDE_SUCCESS = 'REG_GUIDE_SUCCESS'
export const REG_ERROR = 'REG_ERROR';

export const addGuider = guider => dispatch => {
    dispatch({ type: REG_GUIDE_ADD })
    axios
        .post('https://tristan-guidr.herokuapp.com/register', guider)
        .then(res => {
            dispatch({ type: REG_GUIDE_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: REG_ERROR, payload: err.response})
        })
}
