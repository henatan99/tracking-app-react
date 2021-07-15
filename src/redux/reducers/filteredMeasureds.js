import {
  FETCH_FILTERED_MEASUREDS_REQUEST,
  FETCH_FILTERED_MEASUREDS_SUCCESS,
  FETCH_FILTERED_MEASUREDS_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  items: [],
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
        items: action.payload,
        error: '',
      };
    case FETCH_FILTERED_MEASUREDS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
