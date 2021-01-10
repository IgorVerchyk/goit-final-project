import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import projectsOperations from '../../redux/projects/projectsOperations';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

import s from './AddPeopleEditor.module.scss';

export default function AddPeopleEditor({ onClose }) {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const dispatch = useDispatch();

  const handleChangeEmail = e => {
    setEmail(e.currentTarget.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (email === '') {
        setErrorEmail(true);
        return;
      }

      dispatch(projectsOperations.addProject({ email }));

      onClose();
    },
    [dispatch, email, onClose],
  );

  const handleCanselingBtn = e => {
    console.log(e);
    onClose();
    setEmail('');
  };

  return (
    <>
      <h2 className={s.title}>Додати людину</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="projectName" className={s.formLabel}>
          Назва проекту*
          <br />
          <input
            type="text"
            value={email}
            onChange={handleChangeEmail}
            name="projectName"
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
