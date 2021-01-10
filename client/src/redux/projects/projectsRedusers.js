import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  addProjectSuccess,
  cancelingProjectSuccess,
  removeProjectRequest,
  removeProjectSuccess,
} from './projectsActions';

const removeProject = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const items = createReducer([], {
  [fetchProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => [...state, payload],
  [removeProjectSuccess]: removeProject,
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
