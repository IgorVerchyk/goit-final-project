import React from 'react';

import validate from './validateInfo';
import useForm from './useForm';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormRegistration.module.scss';

export default function FormRegistration({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate,
  );

  return (
    <form className={s.formAuth} onSubmit={handleSubmit}>
      <h2 className={s.titleForm}>Реєстрація</h2>
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

      <FormLabel
        value={values.password2}
        labelText={'Пароль'}
        type={'password'}
        name={'password2'}
        handleChange={handleChange}
        errors={errors}
      />

      <PrimaryBtn text={'Зареєструватися'} classBtn={'btnSubmit'} />

      <FormTextAndLink
        accauntText={'Маєте акаунт?'}
        routeTo={'/login'}
        linkText={'Увійти'}
      />
    </form>
  );
}
