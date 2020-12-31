import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addProjectRequest,
  addProjectError,
  addProjectSuccess,
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
} from './projectsActions';

const items = createReducer([], {
  [fetchProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  // [deleteProjectSuccess]: (state, { payload }) =>
  //   state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [fetchProjectsRequest]: () => true,
  [fetchProjectsSuccess]: () => false,
  [fetchProjectsError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  loading,
  error,
});
