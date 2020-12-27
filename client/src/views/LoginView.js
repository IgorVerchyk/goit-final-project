import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { authOperations } from '../redux/auth';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormLogin from '../components/Forms/FormLogin/FormLogin';
import FormSuccess from '../components/Forms/FormSuccess/FormSuccess';

export default function LoginView() {
  const history = useHistory();
  const isLogin = useSelector(state => state.auth.isLogin);

  const dispatch = useDispatch();
  const onLogin = useCallback(
    dataUser => dispatch(authOperations.login(dataUser)),
    [dispatch],
  );

  const submitForm = dataUser => {
    onLogin(dataUser);
  };

  if (isLogin) {
    setTimeout(() => {
      history.replace('/');
    }, 1500);
  }

  return (
    <AuthenticationsBlock>
      {!isLogin ? (
        <FormLogin submitForm={submitForm} />
      ) : (
        <FormSuccess title={'Вхід здійснено!'} textLogin={true} />
      )}
    </AuthenticationsBlock>
  );
}
