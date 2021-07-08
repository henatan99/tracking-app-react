import { CHANGE_USERNAME } from '../actions/actionTypes';

export default function (state = '', action) {
    switch (action.type) {
        case CHANGE_USERNAME:
            return action.payload;
        default:
            return state;
    }
}
