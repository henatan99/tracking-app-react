import { combineReducers } from 'redux';
import login from './login';
import logout from './logout';

export default combineReducers({
  login, logout,
});
