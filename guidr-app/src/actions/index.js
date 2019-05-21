import axios from 'axios';

export const REG_GUIDE_ADD = 'REG_GUIDE_ADD';
export const REG_GUIDE_SUCCESS = 'REG_GUIDE_SUCCESS'
export const REG_ERROR = 'REG_ERROR';

export const addGuider = guider => dispatch => {
    dispatch({ type: REG_GUIDE_ADD })
    axios
        .post('', guider)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

