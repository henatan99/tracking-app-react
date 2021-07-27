import { SET_MEASUREMENTS } from '../actions/types';
import { loadState } from '../services/localStorage';

const initialState = loadState('measurements');

export default function (state = initialState || [], action) {
  switch (action.type) {
    case SET_MEASUREMENTS:
      return action.payload;
    default:
      return state;
  }
}
