import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';


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
    .catch(err => console.log(err))
};

// User Registration
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

// Fetching Trips Data

export const FETCH_TRIPS_START = 'FETCH_TRIPS_START';
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const FETCH_TRIPS_FAILURE = 'FETCH_TRIPS_FAILURE';
export const getTrips = () => dispatch => {
  dispatch({ type: FETCH_TRIPS_START });
  axiosWithAuth()
    .get('/trips')
    .then(res => {
      dispatch({ type: FETCH_TRIPS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_TRIPS_FAILURE, payload: err });
    });
};

// Add Trip
export const ADD_TRIPS_START = 'ADD_TRIPS_START';
export const ADD_TRIPS_SUCCESS = 'ADD_TRIPS_SUCCESS';
export const ADD_TRIPS_FAILURE = 'ADD_TRIPS_FAILURE';

export const addTrip = trip => dispatch => {
  dispatch({ type: ADD_TRIPS_START });
  axiosWithAuth()
    .post('/trips', trip)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_TRIPS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_TRIPS_FAILURE, payload: err });
    });
};
