import axios from 'axios';

import { authActions } from './';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/auth';
// const baseURL = 'http://localhost:3456/api/auth';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = dataUser => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const { data } = await axios.post(`${baseURL}/registration`, dataUser);

    dispatch(authActions.registerSuccess(data.data));
  } catch (error) {
    dispatch(authActions.registerError(error.response.data));
    console.error(error);
  }
};

const login = dataUser => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post(`${baseURL}/login`, dataUser);

    const { projects, ...user } = data;

    token.set(data.token);

    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.response.data));
    console.error(error);
  }
};

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post(`${baseURL}/logout`);
    console.log('logout +');
    await token.unset();
    dispatch(authActions.logoutSuccess());
    return;
  } catch (error) {
    console.log(error);
    console.log('logout -');

    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrent = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.currentUserRequest());
  try {
    await axios.post(`${baseURL}/current`);
    console.log('current');
    dispatch(authActions.currentUserSuccess());
    return;
  } catch (error) {
    console.log(error);
    console.log('logout -');

    dispatch(authActions.currentUserError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  token,
  logout,
  getCurrent,
};
