import axios from 'axios';

import {
    CHANGE_USERNAME,
} from './actionTypes';

export const changeUsername = (username) => ({
    type: CHANGE_USERNAME,
    payload: username
})