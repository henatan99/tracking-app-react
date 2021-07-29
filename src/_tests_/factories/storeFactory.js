import { createStore } from 'redux';

import rootReducer from '../../redux/reducers';

const storeFactory = (initialState) => {
   return createStore(rootReducer, initialState);
}

export default storeFactory;