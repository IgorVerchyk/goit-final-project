import axios from 'axios';

import { authActions } from './';

const baseURL = 'https://project-manager-goit20.herokuapp.com/api/auth';
//const baseURL = 'http://localhost:3001/api/auth';

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

    token.set(data.token);

    dispatch(authActions.loginSuccess(data));
  } catch (error) {
    dispatch(authActions.loginError(error.response.data));
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

const getCurrentUser = () => async (dispatch, getState) => {
  try {
    const {
      auth: { token: existingToken },
    } = getState();

    if (existingToken) {
      dispatch(authActions.getCurrentUserRequest());

      await token.set(123);

      const { data } = await axios.get(`${baseURL}/current`);
      console.log('После фетча');

      const { user } = data.data;

      dispatch(authActions.getCurrentUserSuccess(user));
    }
  } catch (e) {
    token.unset();
    dispatch(authActions.getCurrentUserError(e.response.data));
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  token,
  logout,

  getCurrentUser,
};
