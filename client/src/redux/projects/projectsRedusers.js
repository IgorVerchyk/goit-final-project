import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchProjectsRequest,
  fetchProjectsSuccess,
  fetchProjectsError,
  addProjectSuccess,
  cancelingProjectSuccess,
} from './projectsActions';

const addProject = (state, action) => {
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

const items = createReducer([], {
  [fetchProjectsSuccess]: (_, { payload }) => payload,
  [addProjectSuccess]: addProject,
  [cancelingProjectSuccess]: (_, { payload }) => payload,
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
