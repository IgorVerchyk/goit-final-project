import React, { useState } from 'react';

import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

import s from './AddPeopleEditor.module.scss';

export default function AddPeopleEditor({ onClose, colaborators }) {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '') {
      setErrorEmail(true);
      return;
    }

    colaborators.push(email);
    console.log(colaborators);

    onClose();
  };

  const handleCanselingBtn = e => {
    onClose();
    setEmail('');
  };

  return (
    <>
      <h2 className={s.title}> Додати людину</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="email" className={s.formLabel}>
          Введіть адресу електронної пошти:
          <br />
          <input
            type="email"
            value={email}
            onChange={handleChangeEmail}
            name="email"
            className={!errorEmail ? s.formInput : s.error}
          />
        </label>

        <PrimaryBtn text={'Готово'} typeBtn={'submit'} />
        <p className={s.cansel} onClick={handleCanselingBtn}>
          Відміна
        </p>
      </form>
    </>
  );
}
