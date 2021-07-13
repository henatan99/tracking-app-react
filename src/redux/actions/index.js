import axios from 'axios';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_MEASUREMENTS,
  CREATE_MEASUREMENT,
  FETCH_MEASUREDS_REQUEST,
  FETCH_MEASUREDS_SUCCESS,
  FETCH_MEASUREDS_FAILURE,
} from './types';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setMeasurements = (measurements) => ({
  type: SET_MEASUREMENTS,
  payload: measurements,
});

export const createMeasurement = (measured) => ({
  type: CREATE_MEASUREMENT,
  payload: measured,
});

export const fetchMeasureds = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_MEASUREDS_REQUEST });

  try {
    const response = await axios.get(
      `https://pure-tundra-23506.herokuapp.com/users/${userId}/measureds`,
    );

    dispatch({ type: FETCH_MEASUREDS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MEASUREDS_FAILURE }, error);
  }
};
