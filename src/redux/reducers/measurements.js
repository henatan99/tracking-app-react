import { SET_MEASUREMENTS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SET_MEASUREMENTS:
      return action.payload;
    default:
      return state;
  }
}
