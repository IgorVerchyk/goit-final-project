import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { authOperations } from '../redux/auth';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormRegistration from '../components/Forms/FormRegistration/FormRegistration';
import FormSuccess from '../components/Forms/FormSuccess/FormSuccess';

export default function RegisterView() {
  const isRegister = useSelector(state => state.auth.isRegister);

  const dispatch = useDispatch();
  const onRegister = useCallback(
    dataUser => dispatch(authOperations.register(dataUser)),
    [dispatch],
  );

  const submitForm = dataUser => {
    onRegister(dataUser);
  };

  return (
    <AuthenticationsBlock>
      {!isRegister ? (
        <FormRegistration submitForm={submitForm} />
      ) : (
        <FormSuccess title={'Зареєстровано'} textLogin={false} />
      )}
    </AuthenticationsBlock>
  );
}
