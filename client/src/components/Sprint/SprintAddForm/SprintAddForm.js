import React, { useState, useCallback } from 'react';
import DatePicker from 'react-date-picker';
import PrimaryBtn from '../../Buttons/PrimaryBtn/PrimaryBtn';
import './datePicker.scss';
import './calendar.scss';
import s from './SprintAddForm.module.scss';

export default function SprintAddForm({ onClose }) {
  const [sprintName, setSprintName] = useState('');
  const [value, onChange] = useState(new Date());
  const [duration, setSprintDuration] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorDuration, setErrorDuration] = useState('');

  const handleChangeName = e => {
    setSprintName(e.target.value);
  };

  const handleChangeDuration = e => {
    setSprintDuration(e.target.value);
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      if (sprintName === '') {
        setErrorName(true);
        return;
      } else if (duration === '') {
        setErrorDuration(true);
      }
      //backend logic
      else onClose();
    },
    [sprintName, duration, onClose],
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
          value={sprintName}
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
        <label for="days">Попередні дні</label>
        <div className={s.calendar}>
          <label for="date" className={s.calendarLabel}>
            Дата закінчення
          </label>
          <DatePicker
            onChange={onChange}
            value={value}
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
