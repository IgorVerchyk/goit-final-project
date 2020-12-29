import React from 'react';

import s from './PrimaryBtn.module.scss';

export default function PrimaryBtn({ text, handleOnClick, classBtn }) {
  return (
    <button
      onClick={handleOnClick}
      className={`${s.primaryBtn} ${s[classBtn]}`}
      type={'submit'}
    >
      {text}
    </button>
  );
}
