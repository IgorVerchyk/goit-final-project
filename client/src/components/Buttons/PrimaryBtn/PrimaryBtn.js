import React from 'react';

import s from './PrimaryBtn.module.scss';

export default function PrimaryBtn({
  text,
  isSubmitting,
  classBtn,
  typeBtn,
  handleOnClick,
}) {
  return (
    <button
      className={`${s.primaryBtn} ${s[classBtn]}`}
      type={typeBtn}
      disabled={isSubmitting}
      onClick={handleOnClick}
    >
      {text}
    </button>
  );
}
