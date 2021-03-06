import axios from 'axios';

import {
  LOGIN_USER,
  LOGOUT_USER,
  SET_MEASUREMENTS,
  CREATE_MEASUREMENT,
  CREATE_GOAL,
  FETCH_MEASUREDS_REQUEST,
  FETCH_MEASUREDS_SUCCESS,
  FETCH_MEASUREDS_FAILURE,
  FETCH_FILTERED_MEASUREDS_REQUEST,
  FETCH_FILTERED_MEASUREDS_SUCCESS,
  FETCH_FILTERED_MEASUREDS_FAILURE,
  FETCH_GOALS_REQUEST,
  FETCH_GOALS_SUCCESS,
  FETCH_GOALS_FAILURE,
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

export const createGoal = (goal) => ({
  type: CREATE_GOAL,
  payload: goal,
});

export const fetchGoals = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_GOALS_REQUEST });

  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `https://pure-tundra-23506.herokuapp.com/users/${userId}/goals`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    dispatch({ type: FETCH_GOALS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_GOALS_FAILURE }, error);
  }
};

export const fetchMeasureds = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_MEASUREDS_REQUEST });

  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `https://pure-tundra-23506.herokuapp.com/users/${userId}/measureds`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    dispatch({ type: FETCH_MEASUREDS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MEASUREDS_FAILURE }, error);
  }
};

export const fetchfilterByMeasurementIdMeasureds = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_FILTERED_MEASUREDS_REQUEST });

  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `https://pure-tundra-23506.herokuapp.com/users/${userId}/filter_by_measurement_id_measureds`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    dispatch({ type: FETCH_FILTERED_MEASUREDS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_FILTERED_MEASUREDS_FAILURE }, error);
  }
};
