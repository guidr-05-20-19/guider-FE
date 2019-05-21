import { REG_GUIDER , REG_ERROR } from '../actions';

const initialState = {
    guides: [],
    isRegistering: false,
    error: null
} 


export const Regreducer = (state = initialState, action) => {
    switch(action.type){
        case REG_GUIDER: 
        return {
            isRegistering: true,
            error: '',
            guides: action.payload
        } 
        
        case REG_ERROR: 
        return {
            error: action.payload,
            isRegistering: false,
        }

        default:
        return state;

    }   
}