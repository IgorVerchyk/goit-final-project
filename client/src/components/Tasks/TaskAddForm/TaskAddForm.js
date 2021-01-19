import React from 'react';
import { useDispatch } from 'react-redux';
import projectOperations from '../../../redux/projects/projectsOperations';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import styles from './TaskAddForm.module.scss';
import { useFormik } from 'formik';
import validate from './validateTaskForm';

export default function TaskAddForm({ onClose, sprintId }) {
  const initialValues = {
    descr: '',
    planTime: '',
    spendTime: [],
  };

  const onSubmit = values => {
    const route = '/tasks/';

    const body = values;
    const id = sprintId;

    //here your code to Dispatch value to backend
    dispatch(projectOperations.addDocument({ route, id, body }));
    onClose();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const dispatch = useDispatch();

  return (
    <section className={styles.TaskForm}>
      <h2 className={styles.title}>Створення задачі</h2>
      <form className={styles.inputTaskForm} onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="descr"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.descr && formik.errors.descr
              ? `${styles.inputTitle} ${styles.validateTask}`
              : styles.inputTitle
          }
          placeholder={'Назва задачі'}
        ></input>
        <input
          value={formik.values.planTime}
          type="number"
          min="1"
          max="24"
          name="planTime"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.planTime && formik.errors.planTime
              ? `${styles.inputTime} ${styles.validateTask}`
              : styles.inputTime
          }
          placeholder={'Заплановано годин'}
        ></input>
        <br />
        <PrimaryBtn text={'Готово'} />
      </form>
      <div className={styles.cancel} onClick={onClose}>
        Відміна
      </div>
    </section>
  );
}
