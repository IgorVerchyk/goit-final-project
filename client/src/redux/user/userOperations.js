import axios from 'axios';

import { userActions } from '.';

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
  dispatch(userActions.registerRequest());

  try {
    const { data } = await axios.post(`${baseURL}/registration`, dataUser);

    dispatch(userActions.registerSuccess(data.data));
  } catch (error) {
    dispatch(userActions.registerError(error.response.data));
    console.error(error);
  }
};

const login = dataUser => async dispatch => {
  dispatch(userActions.loginRequest());

  try {
    const { data } = await axios.post(`${baseURL}/login`, dataUser);

    const { projects, ...user } = data;

    token.set(data.token);

    dispatch(userActions.loginSuccess(data));
  } catch (error) {
    dispatch(userActions.loginError(error.response.data));
    console.error(error);
  }
};

const logout = () => async dispatch => {
  dispatch(userActions.logoutRequest());
  try {
    await axios.post(`${baseURL}/logout`);
    console.log('logout +');
    await token.unset();
    dispatch(userActions.logoutSuccess());
    return;
  } catch (error) {
    console.log(error);
    console.log('logout -');

    dispatch(userActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  try {
    const {
      user: { token: existingToken },
    } = getState();

    if (existingToken) {
      dispatch(userActions.getCurrentUserRequest());

      await token.set(existingToken);

      const { data } = await axios.get(`${baseURL}/current`);
      console.log('data', data);
      const { user } = data.data;
      console.log('user', user);

      if (!data) {
        await token.unset();

        dispatch(userActions.getCurrentUserError());
        return;
      }

      console.log(data);

      dispatch(userActions.getCurrentUserSuccess(user));
    }
  } catch (e) {
    console.log(e);
    dispatch(userActions.getCurrentUserError(e));
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
