import { combineReducers } from 'redux';
import user from './user';
import measurements from './measurements';
import measureds from './measureds';
import filteredMeasureds from './filteredMeasureds';
import goals from './goals';
import logingUser from './logingUser';
import progressProps from './progressProps';
import values from './values';

export default combineReducers({
  user, measurements, measureds, filteredMeasureds, goals, logingUser, progressProps, values,
});
