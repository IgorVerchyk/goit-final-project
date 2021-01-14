import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import projectsOperations from '../../redux/projects/projectsOperations';

import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

import s from './AddPeopleEditor.module.scss';

export default function AddPeopleEditor({ onClose, props }) {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const dispatch = useDispatch();
  const projectId = props.id.location.state.id;

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (email === '') {
        setErrorEmail(true);
        return;
      }

      dispatch(projectsOperations.addDocument({ email, projectId }));

      onClose();
    },
    [dispatch, email, projectId, onClose],
  );

  const handleCanselingBtn = () => {
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
