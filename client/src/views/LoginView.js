import React from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormLogin from '../components/FormLogin/FormLogin';

export default function LoginView() {
  console.log('login');
  return (
    <AuthenticationsBlock>
      <FormLogin />
    </AuthenticationsBlock>
  );
}
