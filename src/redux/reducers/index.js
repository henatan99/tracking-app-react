import { combineReducers } from 'redux';
import user from './measurements';
import measurements from './user';
import measureds from './measureds';

export default combineReducers({
  user, measurements, measureds,
});
