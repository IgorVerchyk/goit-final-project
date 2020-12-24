import React, { useState } from 'react';

import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormRegistration.module.scss';

export default function FormRegistration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  // для теста стилей на ошибку ---start
  const errorEmail = false;
  const errorPassword = false;
  // --end

  return (
    <form className={s.formAuth}>
      <h2 className={s.titleForm}>Реєстрація</h2>
      <FormLabel
        stateValue={email}
        title={'E-mail'}
        type={'email'}
        name={'email'}
        // text={"Невірний E-mail"}
        handleChange={setEmail}
        timeError={errorEmail}
      />
      <FormLabel
        stateValue={password}
        title={'Пароль'}
        type={'password'}
        name={'password'}
        text={''}
        handleChange={setPassword}
        // timeError={errorPassword}
      />

      <FormLabel
        stateValue={passwordRepeat}
        title={'Повторіть пароль'}
        type={'password'}
        name={'password'}
        text={'Паролі не співпадають'}
        handleChange={setPasswordRepeat}
        timeError={errorPassword}
      />

      <PrimaryBtn text={'Зареєструватися'} />

      <FormTextAndLink
        accauntText={'Маєте акаунт?'}
        routeTo={'/login'}
        linkText={'Увійти'}
      />
    </form>
  );
}
