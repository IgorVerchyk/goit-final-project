import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import projectOperations from '../../../redux/projects/projectsOperations';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import styles from './TaskAddForm.module.scss';

export default function TaskAddForm({ onCloseModal, sprintId }) {
  const [descr, setTitle] = useState('');
  const [planTime, setTime] = useState(Number);

  const dispatch = useDispatch();

  const handleInputTitle = ev => {
    setTitle(ev.target.value);
  };

  const handleInputTime = ev => {
    setTime(ev.target.value);
  };
  const handleSubmit = ev => {
    ev.preventDefault();

    // form body
    const route = '/tasks/';

    const body = { descr, planTime };
    const id = sprintId;

    dispatch(projectOperations.addDocument({ route, id, body }));

    onCloseModal();
  };

  return (
    <section className={styles.TaskForm}>
      <h2 className={styles.title}>Створення задачі</h2>
      <form className={styles.inputTaskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleInputTitle}
          className={[styles.inputTitle]}
          placeholder={'Назва задачі'}
        ></input>
        <input
          type="text"
          onChange={handleInputTime}
          className={styles.inputTime}
          placeholder={'Заплановано годин'}
        ></input>
        <br />
        <PrimaryBtn text={'Готово'} />
      </form>
      <div className={styles.cancel} onClick={onCloseModal}>
        Відміна
      </div>
    </section>
  );
}
