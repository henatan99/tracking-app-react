import axios from 'axios';
// import { progProps } from '../../helpers/progressData';

import {
  // SIGNUP_USER,
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
  // LOGIN_USER_REQUEST,
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAILURE,
  // SET_VALUES,
  // SET_PROGRESS_PROPS,
  // SET_VIEW,
} from './types';

// export const signupUser = (user) => ({
//   type: SIGNUP_USER,
//   payload: user,
// });

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

// export const setValues = (values) => ({
//   type: SET_VALUES,
//   payload: values,
// });

// export const setProgressProps = (filteredMeasureds, goals, mid) => ({
//   type: SET_PROGRESS_PROPS,
//   payload: progProps(filteredMeasureds, goals, mid),
// });

// export const setView = (view) => ({
//   type: SET_VIEW,
//   payload: view,
// });

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

// export const logingUser = (username) => async (dispatch) => {
//   dispatch({ type: LOGIN_USER_REQUEST });

//   try {
//     const response = axios({
//       method: 'POST',
//       url: 'https://pure-tundra-23506.herokuapp.com/login',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       data: {
//         username,
//       },
//     });

//     dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data });
//     console.log(`From logingUser action response: ${response}`);
//   } catch (error) {
//     dispatch({ type: LOGIN_USER_FAILURE }, error);
//   }
// };
