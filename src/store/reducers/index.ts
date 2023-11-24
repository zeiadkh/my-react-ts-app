// src/store/reducers/index.ts

import { combineReducers } from 'redux';
import counterReducer from './counter';
import authReducer from './authReducer';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
  tasks: tasksReducer

  // Add more reducers here if needed
});

export default rootReducer;
