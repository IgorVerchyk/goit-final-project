import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addTaskSuccess,
  // removeTaskRequest,
  // removeTaskSuccess,
} from './tasksActions';

// const removeTask = (state, action) => {
//   return state.filter(({ id }) => id !== action.payload);
// };

const items = createReducer([], {
  [addTaskSuccess]: (state, { payload }) => [...state, payload],
  // [removeTaskSuccess]: removeTask,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  error,
});
