import React from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormLogin from '../components/FormLogin/FormLogin';

export default function LoginView() {
  return (
    <AuthenticationsBlock>
      <FormLogin />
    </AuthenticationsBlock>
  );
}
