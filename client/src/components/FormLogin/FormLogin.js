import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';

import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormLogin.module.scss';

export default function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const onLogin = useCallback(
    dataUser => dispatch(authOperations.login(dataUser)),
    [dispatch],
  );

  // для теста стилей на ошибку ---start
  const errorEmail = false;
  const errorPassword = false;
  // --end

  const hendleSubmit = e => {
    e.preventDefault();

    onLogin({ email, password });
  };

  return (
    <form className={s.formAuth} onSubmit={hendleSubmit}>
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
