import axios from 'axios';

import { authActions } from './';

const baseURL = 'https://project-manager-goit20.herokuapp.com';

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
    const { data } = await axios.post(
      `${baseURL}/api/auth/registration`,
      dataUser,
    );

    dispatch(authActions.registerSuccess(data.data));
  } catch (error) {
    dispatch(authActions.registerError(error.response.data));
    console.error(error);
  }
};

const login = dataUser => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post(`${baseURL}/api/auth/login`, dataUser);
    console.log(data);

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
    await axios.post(`${baseURL}/users/logout`);
    console.log('logout +');
    // token.unset();
    dispatch(authActions.logoutSucces());
  } catch (error) {
    console.log('logout -');

    dispatch(authActions.logoutError(error.message));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  token,
  logout,
};
