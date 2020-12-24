import React, { useState } from 'react';

import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormLogin.module.scss';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // для теста стилей на ошибку ---start
  const errorEmail = false;
  const errorPassword = false;
  // --end

  return (
    <form className={s.formAuth}>
      <h2 className={s.titleForm}>Вхід</h2>
      <FormLabel
        stateValue={email}
        title={'E-mail'}
        type={'email'}
        name={'email'}
        text={'Невірний E-mail'}
        handleChange={setEmail}
        timeError={errorEmail}
      />
      <FormLabel
        stateValue={password}
        title={'Пароль'}
        type={'password'}
        name={'password'}
        text={'Невірний Пароль'}
        handleChange={setPassword}
        timeError={errorPassword}
      />
      <PrimaryBtn text={'Увійти'} />
      <FormTextAndLink
        accauntText={'Немає акаунту?'}
        routeTo={'/register'}
        linkText={'Зареєструватись'}
      />
    </form>
  );
}
