import { combineReducers } from 'redux';
import auth from './auth';
import messsage from './message';

export default combineReducers({
    auth,
    messsage,
});