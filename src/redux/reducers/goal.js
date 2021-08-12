import { CREATE_GOAL } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_GOAL:
      return action.payload;
    default:
      return state;
  }
}
