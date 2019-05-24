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
        console.log(res)
      dispatch({ type: FETCH_TRIPS_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err)
      dispatch(
         { type: FETCH_TRIPS_FAILURE }
          );
    });
};


export const ADD_TRIP_START = 'ADD_TRIP_START';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';

  
  export const addTrip = (newTrip) => dispatch => {
    dispatch({type: ADD_TRIP_START });
    axiosWithAuth()
    .post('/trips', newTrip)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: ADD_TRIP_SUCCESS, 
                payload: res.data
             })
        })
        .catch (err => {
            dispatch({
                type: ADD_TRIP_FAILURE,
                payload: err
            });
        })
  }


  export const UPDATE_TRIP_START = 'UPDATE_TRIP_START';
  export const UPDATE_TRIP_SUCCESS = 'UPDATE_TRIP_SUCCESS';
  export const UPDATE_TRIP_FAILURE = 'UPDATE_TRIP_FAILURE';
  
    
    export const updateTrip = (updatedTrip, id) => dispatch => {
      dispatch({type: UPDATE_TRIP_START });
      axiosWithAuth()
      .put(`/trips/${id}`, updatedTrip)
          .then(res => {
              console.log(res.data);
              dispatch({
                  type: UPDATE_TRIP_SUCCESS, 
                  payload: res.data
               })
          })
          .catch (err => {
              dispatch({
                  type: UPDATE_TRIP_FAILURE,
                  payload: err
              });
          })
    }


export const DELETE_TRIP_START = 'DELETE_TRIP_START';
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
export const DELETE_TRIP_FAILURE = 'DELETE_TRIP_FAILURE';

  
  export const deleteTrip = (id) => dispatch => {
    console.log(id)
    dispatch({type: DELETE_TRIP_START });
    axiosWithAuth()
    .delete(`/trips/${id}`, id)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: DELETE_TRIP_SUCCESS, 
                payload: res.data
             })
        })
        .catch (err => {
            dispatch({
                type: DELETE_TRIP_FAILURE,
                payload: err
            });
        })
  }