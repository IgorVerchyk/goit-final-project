import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { userActions } from '.';
import projectsActions from '../projects/projectsActions';
import notification from 'toastr';

const resetErrorMessage = null;

const errors = (state, payload) => {
  console.log(payload);
  if (payload.message.includes('duplicate key error collection' && 'email')) {
    notification.error(`Цей e-mail вже використовується.`, `Виникла помилка!`);
  }

  if (payload.message === `Cannot read property 'password' of null`) {
    notification.error(`Цей e-mail не зареєстровано.`, `Виникла помилка!`);
  }

  if (payload.message === `Invalid creadentials` && payload.code === 401) {
    notification.error(`Не вірний email або пароль.`, `Виникла помилка!`);
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
    [userActions.registerSuccess]: (state, { payload }) => {
      notification.success(
        `На Ваш e-mail, було відправлено листа для підтвердження.`,
        `Ви зареєструвались!`,
      );

      return payload;
    },
    [userActions.currentUserSuccess]: (state, { payload }) => payload,
    [userActions.loginSuccess]: (state, { payload }) => payload,
    [userActions.logoutSuccess]: (state, action) => ({}),
    [userActions.getCurrentUserSuccess]: (state, { payload }) => payload,
    [projectsActions.addProjectSuccess]: (state, { payload }) => payload,
    [projectsActions.addDocumentSuccess]: (state, { payload }) => payload,
    [projectsActions.addColaboratorsSuccess]: (state, { payload }) => payload,
    [projectsActions.removeDocumentSuccess]: (state, { payload }) => payload,
    [projectsActions.updateDocumentSuccess]: (state, { payload }) => payload,
  },
);

const isRegister = createReducer(false, {
  [userActions.registerSuccess]: (state, { payload }) => true,
  [userActions.isRegister]: (state, { payload }) => payload,
});

const isLogin = createReducer(false, {
  [userActions.isLogin]: (state, { payload }) => payload,
  [userActions.loginSuccess]: (state, { payload }) => true,
  [userActions.currentUserSuccess]: (state, { payload }) => true,
  [userActions.logoutSuccess]: (state, { payload }) => false,
  [userActions.getCurrentUserSuccess]: (state, { payload }) => true,
});

const token = createReducer(null, {
  [userActions.loginSuccess]: (_, { payload }) => payload.token,
  [userActions.getCurrentUserSuccess]: (_, { payload }) => payload.token,
  [userActions.getCurrentUserError]: (_, { payload }) => null,
  [userActions.logoutSuccess]: (state, { payload }) => false,
});

const error = createReducer(null, {
  [userActions.loginSuccess]: () => resetErrorMessage,
  [userActions.registerSuccess]: (_, action) => resetErrorMessage,
  [userActions.currentUserSuccess]: (_, action) => resetErrorMessage,
  [userActions.registerError]: (state, { payload }) => errors(state, payload),
  [userActions.loginError]: (state, { payload }) => errors(state, payload),
  [userActions.currentUserError]: (state, { payload }) =>
    errors(state, payload),
  [projectsActions.addProjectError]: (state, { payload }) =>
    errors(state, payload),
  [projectsActions.addDocumentError]: (state, { payload }) =>
    errors(state, payload),

  [projectsActions.removeDocumentError]: (state, { payload }) =>
    errors(state, payload),
  // [projectsActions.updateDocumentError]: (state, { payload }) =>

});

export default combineReducers({
  currentUser,
  isRegister,
  isLogin,
  token,
  error,
});
