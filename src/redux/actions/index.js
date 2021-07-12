import {
  LOGIN_USER, LOGOUT_USER, SET_MEASUREMENTS, CREATE_MEASUREMENT,
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
