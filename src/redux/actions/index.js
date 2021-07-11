import { LOGIN_USER, LOGOUT_USER, CREATE_MEASUREMENT } from './types';

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const createMeasurement = (measured) => ({
  type: CREATE_MEASUREMENT,
  payload: measured,
});
