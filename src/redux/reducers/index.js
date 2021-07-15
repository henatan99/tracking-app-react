import { combineReducers } from 'redux';
import user from './measurements';
import measurements from './user';
import measureds from './measureds';
import filteredMeasureds from './filteredMeasureds';

export default combineReducers({
  user, measurements, measureds, filteredMeasureds,
});
