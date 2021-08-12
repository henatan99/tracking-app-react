import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../actions/types';

const initialState = {
  loading: false,
  user: {},
  measurements: [],
  awt: null,
  error: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        measurements: action.payload.measurements,
        token: action.payload.jwt,
        error: '',
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        measurements: [],
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
