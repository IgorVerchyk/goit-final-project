import React, { useState, useCallback } from 'react';
import DatePicker from 'react-date-picker';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import projectsOperations from '../../../redux/projects/projectsOperations';
import { useDispatch } from 'react-redux';
import './datePicker.scss';
import './calendar.scss';
import s from './SprintAddForm.module.scss';

export default function SprintAddForm({ id, onClose }) {
  const [title, setSprintName] = useState('');
  const [initialDate, onChange] = useState(new Date());
  const test1 = initialDate.getTime();
  console.log(test1);
  const [duration, setSprintDuration] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorDuration, setErrorDuration] = useState('');

  const handleChangeName = e => {
    setSprintName(e.target.value);
  };

  const handleChangeDuration = e => {
    setSprintDuration(e.target.value);
  };
  const dispatch = useDispatch();

  const getEndDate = (startDate, duration) => {
    const days = Math.ceil((duration / 9) * 86400000);
    console.log(days);
    const initial = startDate.getTime();
    const endDate = initial + days;
    return endDate;
  };

  const route = '/sprints/';

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      const endDate = getEndDate(initialDate, duration);
      const startDate = initialDate.getTime();
      const body = { title, startDate, endDate };
      const test = new Date(endDate);
      console.log(test);

      if (title === '') {
        setErrorName(true);
        return;
      } else if (duration === '') {
        setErrorDuration(true);
      }

      //backend logic
      else dispatch(projectsOperations.addDocument({ id, route, body }));
      console.log(body);
      onClose();
    },
    [dispatch, id, title, initialDate, duration, onClose],
  );

  const handleCanselingBtn = e => {
    console.log(e);
    onClose();
    setSprintName('');
    setSprintDuration('');
  };

  return (
    <>
      <h2 className={s.title}>Створення спринта</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={handleChangeName}
          name="sprintName"
          className={!errorName ? s.formInput : s.error}
          placeholder="Назва спринта"
        />
        <input
          type="checkbox"
          id="days"
          value="yes"
          className={s.checkbox}
        ></input>
        <label htmlFor="days">Попередні дні</label>
        <div className={s.calendar}>
          <label htmlFor="date" className={s.calendarLabel}>
            Дата закінчення
          </label>
          <DatePicker
            onChange={onChange}
            value={initialDate}
            locale="Uk"
            name="date"
            required={true}
            prev2Label={null}
            next2Label={null}
            clearIcon={null}
            calendarIcon={null}
          />
        </div>
        <input
          type="text"
          value={duration}
          onChange={handleChangeDuration}
          name="duration"
          className={!errorDuration ? s.durationInput : s.error}
          placeholder="Тривалість"
        />
        <PrimaryBtn text={'Готово'} />
        <p className={s.cansel} onClick={handleCanselingBtn}>
          Відміна
        </p>
      </form>
    </>
  );
}
