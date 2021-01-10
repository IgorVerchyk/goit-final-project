import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { authActions } from './';
import notification from 'toastr';

const resetErrorMessage = null;

const errors = (state, payload) => {
  console.log(payload);
  if (payload.message.includes('duplicate key error collection' && 'email')) {
    notification.error(`Цей e-mail вже використовується.`, `Виникла помилка!`);
  }

  if (payload.message === `Cannot read property 'token' of null`) {
    notification.error(`Цей e-mail не зареєстровано.`, `Виникла помилка!`);
  }

  if (payload.message === 'Request failed with status code 503') {
    notification.error(
      `Вибачте, сервер не відповідає пізніше.`,
      `Виникла помилка!`,
    );
  }

  if (payload.message === 'Request failed with status code 401') {
    notification.error(`Не вірний e-mail або пароль.`, `Виникла помилка!`);
    return;
  }

  return payload;
};

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
    [authActions.logoutSuccess]: (state, action) => ({}),
    [authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
  },
);

const isRegister = createReducer(false, {
  [authActions.registerSuccess]: (state, { payload }) => true,
  [authActions.isRegister]: (state, { payload }) => payload,
});

const isLogin = createReducer(false, {
  [authActions.isLogin]: (state, { payload }) => payload,
  [authActions.loginSuccess]: (state, { payload }) => true,
  [authActions.logoutSuccess]: (state, { payload }) => false,
  [authActions.getCurrentUserSuccess]: (state, { payload }) => true,
});

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.token,
  [authActions.getCurrentUserError]: (_, { payload }) => null,
});

const error = createReducer(null, {
  [authActions.loginSuccess]: () => resetErrorMessage,
  [authActions.registerSuccess]: (_, action) => resetErrorMessage,
  [authActions.registerError]: (state, { payload }) => errors(state, payload),
  [authActions.loginError]: (state, { payload }) => errors(state, payload),
});

export default combineReducers({
  currentUser,
  isRegister,
  isLogin,
  token,
  error,
});
