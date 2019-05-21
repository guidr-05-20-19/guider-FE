import axios from 'axios';

export const REG_GUIDER = 'REG_START';
export const REG_ERROR = 'REG_ERROR';

export const addGuider = guider => dispatch => {
    axios
        .post('', guider)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
}

