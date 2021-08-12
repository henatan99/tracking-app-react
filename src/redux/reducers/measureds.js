import {
  FETCH_MEASUREDS_REQUEST,
  FETCH_MEASUREDS_SUCCESS,
  FETCH_MEASUREDS_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  measureds: [],
  goals: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MEASUREDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MEASUREDS_SUCCESS:
      return {
        ...state,
        loading: false,
        measureds: action.payload.measureds,
        goals: action.payload.goals,
        error: '',
      };
    case FETCH_MEASUREDS_FAILURE:
      return {
        ...state,
        measureds: [],
        goals: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
