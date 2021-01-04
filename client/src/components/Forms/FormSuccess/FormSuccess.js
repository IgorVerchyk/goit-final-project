import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { authActions } from '../../../redux/auth';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';

import s from './FormSuccess.module.scss';

export default function FormLoginSuccess({
  title,
  textLogin = false,
  textRegister = false,
}) {
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

        {textRegister && (
          <>
            <p className={s.text}>
              На Ваш e-mail, було відправлено листа для підтвердження.
            </p>
            <PrimaryBtn
              handleOnClick={handleOnClick}
              text={'Увійти'}
              classBtn={'loginLink'}
            />
          </>
        )}
      </div>
    </div>
  );
}
