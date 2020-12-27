import React from 'react';

import s from './FormLabel.module.scss';

export default function FormLabel({
  handleBlur,
  handleChange,
  errors,
  value,
  name,
  type,
  labelText,
}) {
  const movePlaceholder = value => (value ? s.labelNameOnTop : s.labelName);

  return (
    <label className={s.formLabel}>
      <span
        className={
          errors[name]
            ? `${s.lableError} ${movePlaceholder(value)}`
            : `${s.lableNoError} ${movePlaceholder(value)}`
        }
      >
        {labelText}
      </span>
      <input
        className={
          errors[name] ? `${s.inputError} ${s.formInput}` : s.formInput
        }
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[name] && <p className={s.isError}>{errors[name]}</p>}
    </label>
  );
}
