import { SET_VALUES } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SET_VALUES:
      return action.payload;
    default:
      return state;
  }
}
