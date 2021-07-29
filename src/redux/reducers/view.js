import { SET_VIEW } from '../actions/types';

export default function (state = false, action) {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;
    default:
      return state;
  }
}
