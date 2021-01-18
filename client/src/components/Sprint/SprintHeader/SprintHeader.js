import React from 'react';

import TitleEditor from '../../TitleEditor/TitleEditor';
import moment from 'moment';

import styles from './SprintHeader.module.scss';

export default function SprintHeader({ handleInput, title, id, dateArr }) {
  const route = '/sprints/';
  const sprintEndDay = dateArr.length;
  const today = moment(new Date()).format('MMM Do');
  const todayIs = moment(new Date()).format('MM/DD/YYYY');
  console.log(today);
  function currentDay(today, dateArr) {
    const dayOf = dateArr.indexOf(today);
    if (dayOf === -1) {
      return 1;
    } else {
      return dayOf + 1;
    }
  }
  const dayOf = currentDay(today, dateArr);

  return (
    <div className={styles.headerWrapper}>
      <section className={styles.sprintHeader}>
        <div className={styles.controlAndSearchBlock}>
          <div className={styles.controlPanel}>
            <div className={styles.switch}>
              <div className={styles.leftArrow}>&#60;</div>
              <span className={styles.day}>{dayOf}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalDays}>{sprintEndDay}</span>
              <div className={styles.rightArrow}>&#62;</div>
            </div>
            <span className={styles.date}>{todayIs}</span>
          </div>

          <input
            type="text"
            name="filter"
            onChange={handleInput}
            className={styles.input}
          ></input>
        </div>

        <TitleEditor id={id} initialTitle={title} route={route} />

        <div className={styles.tasksHeader}>
          <p className={styles.tasksHeaderText}>Задача</p>
          <p className={styles.tasksHeaderText}>Заплановано годин</p>
          <p className={styles.tasksHeaderText}>Витрачено год / день</p>
          <p className={styles.tasksHeaderText}>Витрачено годин</p>
          <div className={styles.input1280Wrapper}>
            <input
              type="text"
              name="filter"
              onChange={handleInput}
              className={styles.input}
            ></input>
          </div>
        </div>
      </section>
    </div>
  );
}
