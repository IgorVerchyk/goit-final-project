import React, { useState } from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormRegistration from '../components/Forms/FormRegistration/FormRegistration';
import FormSuccess from '../components/Forms/FormSuccess/FormSuccess';

export default function RegisterView() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <AuthenticationsBlock>
      {!isSubmitted ? (
        <FormRegistration submitForm={submitForm} />
      ) : (
        <FormSuccess title={'Зареєстровано'} textLogin={false} />
      )}
    </AuthenticationsBlock>
  );
}
