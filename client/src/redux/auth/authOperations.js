import axios from 'axios';

import { authActions } from './';

const baseURL = 'http://localhost:3456';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const register = dataUser => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
<<<<<<< HEAD
    const { data } = await axios.post(`${baseURL}`, dataUser);
=======
    const { data } = await axios.post(`${baseURL}/user`, dataUser);
>>>>>>> bd11597666613bee1d465bfd87bdfa1fb9841491

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
    console.log(dataUser);
    const { data } = await axios.post(`${baseURL}/user`, dataUser);

    // token.set(data.token);
    dispatch(authActions.loginSuccess(data));
    console.log('Пользователь вошел');
  } catch (error) {
    console.log('Пользователь НЕ вошел');
    dispatch(authActions.loginError(error));
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
  // token,
  logout,
};
