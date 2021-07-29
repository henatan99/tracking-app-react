import { createStore, combineReducers } from 'redux';
import userReducer from '../../redux/reducers/user';
import measurementsReducer from '../../redux/reducers/measurements';
import measuredsReducer from '../../redux/reducers/measureds';
import filteredMeasuredsReducer from '../../redux/reducers/filteredMeasureds';
import goalsReducer from '../../redux/reducers/goals';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      measurements: measurementsReducer,
      measureds: measuredsReducer,
      filteredMeasureds: filteredMeasuredsReducer,
      goals: goalsReducer,
    }),
  );
  return store;
};

export default configureStore;
