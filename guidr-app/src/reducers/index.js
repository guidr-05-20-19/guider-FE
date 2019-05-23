import { combineReducers } from 'redux';
import { Regreducer } from './Regreducer';
import { loginReducer } from './loginReducer';
import { getTripsReducer } from './getTripsReducer';
import { deleteTripsReducer } from './deleteTripsReducer';

export default combineReducers({
    Regreducer, loginReducer, getTripsReducer, deleteTripsReducer
 })


