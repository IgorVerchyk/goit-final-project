import React from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormRegistration from '../components/Forms/FormRegistration/FormRegistration';

export default function RegisterView() {
  return (
    <AuthenticationsBlock>
      <FormRegistration />
    </AuthenticationsBlock>
  );
}
