import React from 'react';
import { useSelector } from 'react-redux';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormRegistration from '../components/Forms/FormRegistration/FormRegistration';
import FormSuccess from '../components/Forms/FormSuccess/FormSuccess';

export default function RegisterView() {
  const isRegister = useSelector(state => state.auth.isRegister);

  return (
    <AuthenticationsBlock>
      {!isRegister ? (
        <FormRegistration />
      ) : (
        <FormSuccess title={'Зареєстровано'} textRegister={true} />
      )}
    </AuthenticationsBlock>
  );
}
