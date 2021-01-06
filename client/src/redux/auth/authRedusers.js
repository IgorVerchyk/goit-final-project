import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';

const currentUser = createReducer(
  {},
  {
    [authActions.registerSuccess]: (state, { payload }) => payload,
    [authActions.loginSuccess]: (state, { payload }) => payload,
    [authActions.logoutSuccess]: (state, action) => ({}),
  },
);
const isRegister = createReducer(false, {
  [authActions.registerSuccess]: (state, { payload }) => true,
});
const isLogin = createReducer(false, {
  [authActions.loginSuccess]: (state, { payload }) => true,
  [authActions.logoutSuccess]: (state, { payload }) => false,
});

export default combineReducers({
  currentUser,
  isRegister,
  isLogin,
});
