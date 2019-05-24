import { combineReducers } from 'redux';
import { Regreducer } from './Regreducer';
import { loginReducer } from './loginReducer';
import { getTripsReducer } from './getTripsReducer';
import { addTripsReducer } from './addTripsReducer';
import { deleteReducer } from './deleteReducer';
import { updateTripsReducer } from './updateTripsReducer';
import { getoneReducer } from './getoneReducer';

export default combineReducers({
    Regreducer, 
    loginReducer, 
    getTripsReducer, 
    addTripsReducer,
    deleteReducer,
    updateTripsReducer,
    getoneReducer
 })


