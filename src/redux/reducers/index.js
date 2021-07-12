import { combineReducers } from 'redux';
import user from './measurements';
import measurements from './user';

export default combineReducers({
  user, measurements,
});
