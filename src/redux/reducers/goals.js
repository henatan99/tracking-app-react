import {
    FETCH_GOALS_REQUEST,
    FETCH_GOALS_SUCCESS,
    FETCH_GOALS_FAILURE,
  } from '../actions/types';

  const initialState = {
    loading: false,
    items: [],
    error: '',
  };

  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_GOALS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_GOALS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload,
          error: '',
        };
      case FETCH_GOALS_FAILURE:
        return {
          ...state,
          items: [],
          error: action.payload,
        };
      default:
        return state;
    }
  }
  