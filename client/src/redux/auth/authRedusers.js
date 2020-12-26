import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';

const currentUser = createReducer(
  {},
  {
    [authActions.registerSuccess]: (state, { payload }) => payload,
    [authActions.loginSuccess]: (state, { payload }) => payload,
    [authActions.logoutSucces]: (state, action) =>
      // (state = { name: null, email: null }),
      (state = { password: null, email: null }),
  },
);

export default combineReducers({
  currentUser,
});
