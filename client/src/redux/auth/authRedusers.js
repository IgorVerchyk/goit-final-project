import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';

const currentUser = createReducer(
  {},
  {
    [authActions.submitAuthFormSuccess]: (state, { payload }) => {
      console.log('payload', payload);
      return payload;
    },
  },
);

export default combineReducers({
  currentUser,
});
