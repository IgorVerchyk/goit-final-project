import React from 'react';

import s from './FormLabel.module.scss';

export default function FormLabel({
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
      <span className={movePlaceholder(value)}>{labelText}</span>
      <input
        className={s.formInput}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleChange}
      />
      {errors[name] && <p className={s.isError}>{errors[name]}</p>}
    </label>
  );
}
