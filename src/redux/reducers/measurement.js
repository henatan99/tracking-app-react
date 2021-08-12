import CREATE_MEASUREMENT from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case CREATE_MEASUREMENT:
      return action.payload;
    default:
      return state;
  }
}
