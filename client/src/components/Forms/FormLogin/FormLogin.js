import React from 'react';

import validate from './validateInfo';
import useForm from './useForm';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormLogin.module.scss';

export default function FormLogin({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <form className={s.formAuth} onSubmit={handleSubmit} noValidate>
      <h2 className={s.titleForm}>Вхід</h2>

      <FormLabel
        value={values.email}
        labelText={'E-mail'}
        type={'email'}
        name={'email'}
        handleChange={handleChange}
        errors={errors}
      />

      <FormLabel
        value={values.password}
        labelText={'Пароль'}
        type={'password'}
        name={'password'}
        handleChange={handleChange}
        errors={errors}
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
