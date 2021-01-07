import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  addProjectSuccess,
  cancelingProjectSuccess,
  removeProjectSuccess,
} from './projectsActions';

const removeProject = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const items = createReducer([], {
  [fetchProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: (state, { payload }) => payload,
  [cancelingProjectSuccess]: (_, { payload }) => payload,
  [removeProjectSuccess]: (_, { payload }) => payload,
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
