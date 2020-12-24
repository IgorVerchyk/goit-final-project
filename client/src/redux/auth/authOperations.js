import axios from 'axios';

import { authActions } from './';

const baseURL = 'http://localhost:3456';

const postlogin = userData => async dispatch => {
  dispatch(authActions.submitAuthFormRequest());

  try {
    const { data } = await axios.post(`${baseURL}/users`, userData);
    console.log(data);

    dispatch(authActions.submitAuthFormSuccess(data));
  } catch (error) {
    dispatch(authActions.submitAuthFormError);
    console.error(error);
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  postlogin,
};
