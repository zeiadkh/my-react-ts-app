
import { Store,configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers';



const store:Store = configureStore({
  reducer: todoReducer,
});
export default store;

