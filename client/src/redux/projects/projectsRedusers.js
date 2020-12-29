import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  readyProjectSuccess,
  cancelingProjectSuccess,
  removeProjectSuccess,
} from './projectsActions';

const readyProject = (state, action) => {
  const names = state.map(item => item.name.toLowerCase());
  const isNotUniqueProject = names.includes(
    action.payload.name.toLowerCase().trim(),
  );

  if (isNotUniqueProject) {
    // errorMessage(action.payload.name);
    return state;
  } else {
    return [...state, action.payload];
  }
};

const removeProject = (state, action) => {
  return state.filter(({ id }) => id !== action.payload);
};

const items = createReducer([], {
  [fetchProjectsSuccess]: (_, { payload }) => payload,
  [readyProjectSuccess]: readyProject,
  [cancelingProjectSuccess]: (_, { payload }) => payload,
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
