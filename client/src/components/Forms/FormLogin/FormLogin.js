import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { userOperations } from '../../../redux/user';

import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import FormLabel from '../FormLabel/FormLabel';
import FormTextAndLink from '../FormTextAndLink/FormTextAndLink';

import s from './FormLogin.module.scss';

const FormLogin = () => {
  const dispatch = useDispatch();

  const onLogin = useCallback(
    dataUser => dispatch(userOperations.login(dataUser)),
    [dispatch],
  );
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = `Обов'язкове поле`;
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Невірний E-mail';
          }

          if (!values.password) {
            errors.password = `Обов'язкове поле`;
          } else if (!/[a-zA-Z0-9]/.test(values.password)) {
            errors.password = 'Пароль має неприпустимі символи';
          } else if (values.password.length < 6) {
            errors.password = 'Пароль має бути білше 6 символів';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onLogin({ email: values.email, password: values.password });

          console.log({ email: values.email, password: values.password });

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className={s.formAuth} onSubmit={handleSubmit}>
            <h2 className={s.titleForm}>Вхід</h2>
            <FormLabel
              value={values.email}
              labelText={'E-mail'}
              type={'email'}
              name={'email'}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />
            <FormLabel
              value={values.password}
              labelText={'Пароль'}
              type={'password'}
              name={'password'}
              handleChange={handleChange}
              handleBlur={handleBlur}
              errors={errors}
              touched={touched}
            />

            <PrimaryBtn
              text={'Увійти'}
              classBtn={'btnSubmit'}
              isSubmitting={isSubmitting}
              typeBtn={'submit'}
            />

            <FormTextAndLink
              accauntText={'Маєте акаунт?'}
              routeTo={'/registration'}
              linkText={'Зареєструватись'}
            />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormLogin;
