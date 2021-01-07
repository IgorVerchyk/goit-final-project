import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authActions } from '../redux/auth';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormLogin from '../components/Forms/FormLogin/FormLogin';
import FormSuccess from '../components/Forms/FormSuccess/FormSuccess';

export default function LoginView() {
  const history = useHistory();
  const isLogin = useSelector(state => state.auth.isLogin);

  const dispatch = useDispatch();

  const changeIsLogin = useCallback(
    status => dispatch(authActions.isLogin(status)),
    [dispatch],
  );

  if (isLogin) {
    setTimeout(() => {
      history.replace('/');
      changeIsLogin(false);
    }, 1500);
  }

  return (
    <AuthenticationsBlock>
      {!isLogin ? (
        <FormLogin />
      ) : (
        <FormSuccess title={'Вхід здійснено!'} textLogin={true} />
      )}
    </AuthenticationsBlock>
  );
}
