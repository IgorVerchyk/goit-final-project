import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import projectsOperations from '../../redux/projects/projectsOperations';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';

import s from './ProjectEditor.module.scss';

export default function ProjectEditor({ onClose }) {
  const [title, setProjectName] = useState('');
  const [descr, setDescr] = useState('');
  const [color, setColor] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorDescr, setErrorDescr] = useState('');

  // const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  const randomColor = () => {
    const colors = ['#8c72df', '#71DF87', '#FF765F'];
    return colors[Math.floor(Math.random() * 3)];
  };

  const handleChangeName = e => {
    setProjectName(e.target.value);
    setColor(randomColor());
  };
  const handleChangeDescr = e => {
    setDescr(e.currentTarget.value);
  };
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (title === '') {
        setErrorName(true);
        return;
      } else if (descr === '') {
        setErrorDescr(true);
        return;
      }
      dispatch(projectsOperations.addProject({ title, descr, color }));

      onClose();
    },
    [dispatch, title, descr, color, onClose],
  );

  const handleCanselingBtn = e => {
    console.log(e);
    onClose();
    setProjectName('');
    setDescr('');
    setColor('');
  };

  return (
    <>
      <h2 className={s.title}>Створення проекту</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label htmlFor="projectName" className={s.formLabel}>
          Назва проекту*
          <br />
          <input
            type="text"
            value={title}
            onChange={handleChangeName}
            name="projectName"
            className={!errorName ? s.formInput : s.error}
          />
        </label>
        <label htmlFor="descr" className={s.formLabel}>
          Опис*
          <br />
          <input
            type="text"
            value={descr}
            onChange={handleChangeDescr}
            name="descr"
            className={!errorDescr ? s.formInput : s.error}
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
