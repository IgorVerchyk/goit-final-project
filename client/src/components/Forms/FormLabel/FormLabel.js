import React from 'react';

import s from './FormLabel.module.scss';

export default function FormLabel({
  handleBlur,
  handleChange,
  errors,
  touched,
  value,
  name,
  type,
  labelText,
}) {
  const movePlaceholder = value => (value ? s.labelNameOnTop : s.labelName);

  const isValid = errors[name] && touched[name];

  return (
    <label className={s.formLabel}>
      <span
        className={
          isValid
            ? `${s.lableError} ${movePlaceholder(value)}`
            : `${s.lableNoError} ${movePlaceholder(value)}`
        }
      >
        {labelText}
      </span>
      <input
        className={isValid ? `${s.inputError} ${s.formInput}` : s.formInput}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {isValid && <p className={s.isError}>{errors[name]}</p>}
    </label>
  );
}
