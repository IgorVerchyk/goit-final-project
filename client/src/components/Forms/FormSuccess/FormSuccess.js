import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';

import s from './FormSuccess.module.scss';
import { authActions } from '../../../redux/auth';

export default function FormLoginSuccess({ title, link, textLogin }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const changeIsRegister = useCallback(
    status => dispatch(authActions.isRegister(status)),
    [dispatch],
  );

  const handleOnClick = () => {
    changeIsRegister(false);
    history.replace('/login');
  };

  return (
    <div className={s.greeting}>
      <div className={s.wrapper}>
        <h2 className={s.title}>{title}</h2>
        {textLogin && (
          <>
            <p className={s.text}>
              Ви будете перенаправлені на головну сторінку.
            </p>
            <p className={s.text}>
              Якщо це, буде не зробленно, перейдіть на{' '}
              <Link to={'/'} className={s.homeLink}>
                Головну сторінку
              </Link>
              .
            </p>
          </>
        )}

        {!textLogin && (
          <PrimaryBtn
            handleOnClick={handleOnClick}
            text={'Увійти'}
            classBtn={'loginLink'}
          />
        )}
      </div>
    </div>
  );
}
