import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../../redux/auth';

import validate from '../validateInfo';
import useForm from '../useForm';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormLogin.module.scss';

export default function FormLogin({ submitForm }) {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const dispatch = useDispatch();
  // const onLogin = useCallback(
  //   dataUser => dispatch(authOperations.login(dataUser)),
  //   [dispatch],
  // );

  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  // для теста стилей на ошибку ---start
  const errorEmail = false;
  const errorPassword = false;
  // --end

  const hendleSubmit = e => {
    e.preventDefault();

    // onLogin({ email, password });
  };

  const movePlaceholder = value => (value ? s.labelNameOnTop : s.labelName);

  return (
    <form className={s.formAuth} onSubmit={handleSubmit} noValidate>
      <h2 className={s.titleForm}>Вхід</h2>
      {/* <FormLabel
        value={values.email}
        title={'E-mail'}
        type={'email'}
        name={'email'}
        text={'Невірний E-mail'}
        handleChange={handleChange}
        errors={errors}
      /> */}
      <label className={`${s.formLabel} ${s.labelEmail}`}>
        <span className={movePlaceholder(values.email)}>E-mail</span>
        <input
          className={s.inputEmail}
          type={'email'}
          name={'email'}
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className={s.isEmailError}>{errors.email}</p>}
        <p className={s.isEmailError}>{errors.email}</p>
      </label>

      <label className={`${s.formLabel} ${s.labelPassword}`}>
        <span className={movePlaceholder(values.password)}>Пароль</span>
        <input
          className={s.inputPassword}
          type={'password'}
          name={'password'}
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className={s.isPasswordError}>{errors.password}</p>
        )}
      </label>

      {/* <FormLabel
        value={values.password}
        title={'Пароль'}
        type={'password'}
        name={'password'}
        text={'Невірний Пароль'}
        handleChange={handleChange}
        errors={errors}
      /> */}
      <PrimaryBtn text={'Увійти'} />
      <FormTextAndLink
        accauntText={'Немає акаунту?'}
        routeTo={'/register'}
        linkText={'Зареєструватись'}
      />
    </form>
  );
}
