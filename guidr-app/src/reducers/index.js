import { combineReducers } from 'redux';
import { Regreducer } from './Regreducer';
import { loginReducer } from './loginReducer';
import { getTripsReducer } from './getTripsReducer';
import { deleteTripsReducer } from './deleteTripsReducer';
import { addTripReducer } from './addTripReducer';

export default combineReducers({
    Regreducer, loginReducer, getTripsReducer, deleteTripsReducer, addTripReducer
 })


