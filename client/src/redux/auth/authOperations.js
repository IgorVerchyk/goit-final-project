import axios from 'axios';

import { authActions } from './';
import { fetchProjectsSuccess } from '../projects/projectsActions';

// const baseURL = 'https://project-manager-goit20.herokuapp.com';
const baseURL = 'http://localhost:3456/api/auth';

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

    // token.set(data.token);
    dispatch(authActions.registerSuccess(data));
    console.log('Пользователь зарегестрирован');
  } catch (error) {
    dispatch(authActions.registerError());
    console.log('Пользователь НЕ зарегестрирован');
    console.error(error);
  }
};

const login = dataUser => async dispatch => {
  dispatch(authActions.loginRequest());

  try {
    const { data } = await axios.post(`${baseURL}/login`, dataUser);

    const { projects, ...user } = data;

    console.log(data);

    token.set(data.token);

    dispatch(fetchProjectsSuccess(projects));

    dispatch(authActions.loginSuccess(user));

    console.log('Пользователь вошел');
  } catch (error) {
    console.log('Пользователь НЕ вошел');
    dispatch(authActions.loginError(error));
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  token,
  logout,
};
