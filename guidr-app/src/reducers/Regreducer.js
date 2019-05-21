import { REG_GUIDE_ADD , REG_GUIDE_SUCCESS, REG_ERROR } from '../actions';

const initialState = {
    guides: [],
    isRegistering: false,
    error: null
} 


export const Regreducer = (state = initialState, action) => {
    switch(action.type){
        case REG_GUIDE_ADD: 
        return {
            isRegistering: true,
            error: '',
        } 
        
        case REG_GUIDE_SUCCESS:
        return {
            isRegistering: false,
            guides: action.payload,
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