import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  registerRequest,
  registerSuccess,
  registerError,

  loginRequest,
  loginSuccess,
  loginError,
};
