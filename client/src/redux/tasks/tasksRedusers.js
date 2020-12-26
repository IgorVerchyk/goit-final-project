import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchTasksRequest,
  fetchTasksSuccess,
  fetchTasksError,
} from './tasksActions';

const items = createReducer([], {
  [fetchTasksSuccess]: (_, { payload }) => payload,
  //   [addTaskSuccess]: (state, { payload }) => [...state, payload],
  //   [deleteTaskSuccess]: (state, { payload }) =>
  //     state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchTasksRequest]: () => true,
  [fetchTasksSuccess]: () => false,
  [fetchTasksError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});
