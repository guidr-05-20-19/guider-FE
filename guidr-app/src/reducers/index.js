import { combineReducers } from 'redux';
import { Regreducer } from './Regreducer';
import { loginReducer } from './loginReducer';
import { getTripsReducer } from './getTripsReducer';

export default combineReducers({
    Regreducer, loginReducer, getTripsReducer
 })


