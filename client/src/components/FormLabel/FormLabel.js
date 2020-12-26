import React from "react";

import s from "./FormLabel.module.scss";

export default function FormLabel({
  stateValue,
  title,
  type,
  text,
  name,
  handleChange,
  timeError,
}) {
  const movePlaceholder = (value) => (value ? s.labelNameOnTop : s.labelName);

  const isInputError = (er, defaultClassName) =>
    er ? `${defaultClassName} ${s.inputError}` : defaultClassName;

  return (
    <label className={`${s.formLabel} ${s.labelEmail}`}>
      <span className={movePlaceholder(stateValue)}>{title}</span>
      <input
        className={isInputError(timeError, s.inputEmail)}
        type={type}
        value={stateValue.stateValue}
        name={name}
        onChange={({ target }) => handleChange(target.value)}
        required
      />
      {timeError && <p className={s.isEmailError}>{text}</p>}
    </label>
  );
}
