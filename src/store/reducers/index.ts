import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer

});

export default rootReducer;
