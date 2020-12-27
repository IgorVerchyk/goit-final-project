import React from 'react';
import { Link } from 'react-router-dom';

import s from './FormLoginSuccess.module.scss';

export default function FormLoginSuccess() {
  return (
    <div className={s.greeting}>
      <div className={s.wrapper}>
        <h2 className={s.title}>Вхід здійснено!</h2>
        <p className={s.text}>Ви будете перенаправлені на головну сторінку.</p>
        <p className={s.text}>
          Якщо це, буде не зробленно, перейдіть на{' '}
          <Link to={'/'} className={s.homeLink}>
            Головну сторінку
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
