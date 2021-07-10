import { LOGOUT_USER } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case LOGOUT_USER:
      return action.payload;
    default:
      return state;
  }
}
