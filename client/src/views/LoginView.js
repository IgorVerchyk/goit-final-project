import React, { useState } from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormLogin from '../components/Forms/FormLogin/FormLogin';
import FormSuccess from '../components/Forms/FormSuccess/FormSuccess';

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
        <FormSuccess title={'Вхід здійснено!'} textLogin={true} />
      )}
    </AuthenticationsBlock>
  );
}
