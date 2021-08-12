import { SET_PROGRESS_PROPS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SET_PROGRESS_PROPS:
      return action.payload;
    default:
      return state;
  }
}
