import React, { useState } from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormLogin from '../components/Forms/FormLogin/FormLogin';
import FormLoginSuccess from '../components/Forms/FormLogin/FormLoginSuccess';

export default function LoginView() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <AuthenticationsBlock>
      {!isSubmitted ? (
        <FormLogin submitForm={submitForm} />
      ) : (
        <FormLoginSuccess />
      )}
    </AuthenticationsBlock>
  );
}
