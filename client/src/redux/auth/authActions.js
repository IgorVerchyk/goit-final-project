import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('AUTH/registerRequest');
const registerSuccess = createAction('AUTH/registerSuccess');
const registerError = createAction('AUTH/registerError');

const loginRequest = createAction('AUTH/loginRequest');
const loginSuccess = createAction('AUTH/loginSuccess');
const loginError = createAction('AUTH/loginError');

const isLogin = createAction('AUTH/isLogin');
const isRegister = createAction('AUTH/isRegister');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const currentUserRequest = createAction('auth/logoutRequest');
const currentUserSuccess = createAction('auth/logoutSuccess');
const currentUserError = createAction('auth/logoutError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,

  isLogin,
  isRegister,

  logoutRequest,
  logoutSuccess,
  logoutError,

  currentUserRequest,
  currentUserSuccess,
  currentUserError,
};
