import {
  FETCH_FILTERED_MEASUREDS_REQUEST,
  FETCH_FILTERED_MEASUREDS_SUCCESS,
  FETCH_FILTERED_MEASUREDS_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  filtered_measureds: [],
  goals: [],
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FILTERED_MEASUREDS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_FILTERED_MEASUREDS_SUCCESS:
      return {
        ...state,
        loading: false,
        filtered_measureds: action.payload.measureds_by_measurement,
        goals: action.payload.goals,
        error: '',
      };
    case FETCH_FILTERED_MEASUREDS_FAILURE:
      return {
        ...state,
        filtered_measureds: [],
        goals: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
