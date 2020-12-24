import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';

const currentUser = createReducer(
  {},
  {
    [authActions.submitAuthFormSuccess]: (state, { payload }) => payload,
    [authActions.loginSuccess]: (state, { payload }) => payload,
  },
);

export default combineReducers({
  currentUser,
});
