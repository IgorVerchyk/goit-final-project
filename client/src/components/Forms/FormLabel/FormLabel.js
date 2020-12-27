import React from 'react';

import s from './FormLabel.module.scss';

export default function FormLabel({
  value,
  title,
  type,
  name,
  text,
  handleChange,
  errors,
}) {
  const movePlaceholder = value => (value ? s.labelNameOnTop : s.labelName);

  // const isInputError = (er, defaultClassName) =>
  //   er ? `${defaultClassName} ${s.inputError}` : defaultClassName;

  return (
    <label className={`${s.formLabel} ${s.labelEmail}`}>
      <span className={movePlaceholder(value)}>{title}</span>
      <input
        className={s.inputEmail}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        required
      />
      {errors[name] && <p className={s.isEmailError}>{errors[name]}</p>}
      {/* {timeError && <p className={s.isEmailError}>{text}</p>} */}
    </label>
  );
}
