import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import intentAppReducer from './components/slice/appSlice';
import intentDataReducer from './components/slice/dataSlice';

const data = combineReducers({
  intent: intentDataReducer,
});

const app = combineReducers({
  intent: intentAppReducer,
});

const reducer = combineReducers({ data, app });
export const store = configureStore({
  reducer,
});
