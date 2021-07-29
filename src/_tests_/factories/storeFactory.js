import { createStore, combineReducers } from 'redux';
import userReducer from '../../reducers/categories';
import measurementsReducer from '../../reducers/meals';
import measuredsReducer from '../../reducers/filter';
import filteredMeasuredsReducer from '../../reducers/search';
import goalsReducer from '../../reducers/search';

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
