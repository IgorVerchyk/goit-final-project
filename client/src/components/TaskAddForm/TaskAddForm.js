import React, { useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import tasksOperations from '../../redux/tasks/tasksOperations';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn/PrimaryBtn';
import styles from './TaskAddForm.module.scss';

export default function TaskAddForm({ onCloseModal }) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  // const dispatch = useDispatch();

  const handleInputTitle = ev => {
    setTitle(ev.target.value);
  };

  const handleInputTime = ev => {
    setTime(ev.target.value);
  };
  const handleSubmit = ev => {
    console.log('title', title);
    ev.preventDefault();
    const createTask = task => console.log(`add task with: `, task);
    // dispatch(tasksOperations.createTask(task));
    createTask({ title, time });
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
        <PrimaryBtn text={'Готово'} />
      </form>
      <div className={styles.cancel} onClick={onCloseModal}>
        Відміна
      </div>
    </section>
  );
}
