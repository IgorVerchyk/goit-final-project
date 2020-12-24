import React from 'react';

import AuthenticationsBlock from '../components/AuthenticationsBlock/AuthenticationsBlock';
import FormRegistration from '../components/FormRegistration/FormRegistration';

export default function RegisterView() {
  console.log('reg');
  return (
    <AuthenticationsBlock>
      <FormRegistration />
    </AuthenticationsBlock>
  );
}
