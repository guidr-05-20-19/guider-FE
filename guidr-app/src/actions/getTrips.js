import axios from 'axios';


export const FETCH_TRIPS_START = 'FETCH_TRIPS_START'
export const FETCH_TRIPS_SUCCESS= " FETCH_TRIPS_SUCCESS"
export const FETCH_TRIPS_FAILURE= " FETCH_TRIPS_FAILURE"

// need to fix down there:
    // payload for FETCH_TRIPS_SUCCESS
    // Add API call

export const getTrips = () => dispatch => {
    dispatch({type: FETCH_TRIPS_START });
  axios
      .get('ADD TRIPS END POINT HERE')
      .then(res => {
          dispatch({
              type: FETCH_TRIPS_SUCCESS, 
              payload: //res.users.trips
           })
      })
      .catch (err => {
          dispatch({
              type: FETCH_TRIPS_FAILURE,
              payload: err
          });
      })

}