import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';
import notification from 'toastr';

const currentUser = createReducer(
  {},
  {
    [authActions.registerSuccess]: (state, { payload }) => {
      notification.success(
        `На Ваш e-mail, було відправлено листа для підтвердження.`,
        `Ви зареєструвались!`,
      );

      return payload;
    },
    [authActions.loginSuccess]: (state, { payload }) => payload,
    [authActions.logoutSucces]: (state, action) =>
      // (state = { name: null, email: null }),
      (state = { password: null, email: null }),
  },
);

const isRegister = createReducer(false, {
  [authActions.registerSuccess]: (state, { payload }) => true,
  [authActions.isRegister]: (state, { payload }) => payload,
});

const isLogin = createReducer(false, {
  [authActions.isLogin]: (state, { payload }) => payload,
  [authActions.loginSuccess]: (state, { payload }) => true,
});

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.data.token.token,
});

export default combineReducers({
  currentUser,
  isRegister,
  isLogin,
  token,
});
