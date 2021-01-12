import React, { useState, useEffect } from 'react';

import styles from './TaskCard.module.scss';

export default function Task({
  id,
  title,
  scheduledTime,
  spentTime,
  spentAllTime,
  onDelete,
  changeSpentTime,
}) {
  const [hours, setHours] = useState(0);
  const [errMessage, setErrMessage] = useState(false);

  useEffect(() => {
    setHours(spentTime);
  }, [spentTime]);

  const handleKeyDown = ev => {
    const keyValue = ev.key;
    if (/[-+.]/.test(keyValue)) {
      ev.preventDefault();
    }
    if (ev.key === 'Enter') {
      ev.target.blur();
    }
    if (ev.key === 'Escape') {
      ev.target.value = '';
      setHours(spentTime);
      setErrMessage(false);
      ev.target.blur();
    }
  };

  const handleChange = ev => {
    setHours(ev.target.value);
  };

  const handleBlur = ev => {
    if (ev.target.value === '') {
      return;
    }
    if (hours > 24) {
      ev.target.value = '';
      setHours('');
      setErrMessage(true);
    } else {
      if (Number(hours) !== Number(spentTime)) {
        setErrMessage(false);
        console.log('sent to server:', hours);
        // changeSpentTime(hours);
      }
    }
  };

  const handleClick = () => {
    onDelete();
  };

  return (
    <li id={id} className={styles.el}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.scheduledBlock}>
        <p className={styles.scheduledText}>Заплановано годин</p>
        <span className={styles.scheduledTime}>{scheduledTime}</span>
      </div>
      <div className={styles.spentBlock}>
        <p className={styles.spentText}>Витрачено год / день</p>
        <input
          type="number"
          name="hours"
          className={styles.spentTime}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={errMessage ? `Wrong` : hours || '0'}
        ></input>
      </div>
      <div className={styles.spentAllBlock}>
        <p className={styles.spentAllText}>Витрачено годин</p>
        <span className={styles.spentAllTime}>{spentAllTime}</span>
      </div>
      <div className={styles.trashWrapper} onClick={handleClick}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0ZM11.0064 4.72437H9.00086V5.06183H8.2765V4.67712C8.2765 4.30377 8.58009 4 8.95326 4H11.054C11.4272 4 11.7308 4.30377 11.7307 4.67712V5.06183H11.0064V4.72437ZM13.4034 7.93164H6.60393C6.41762 7.93164 6.27095 8.09058 6.28597 8.27634L6.85442 15.3054C6.88609 15.6978 7.2134 16 7.60661 16H12.4006C12.7938 16 13.1211 15.6978 13.1528 15.3053L13.7212 8.27634C13.7363 8.09058 13.5897 7.93164 13.4034 7.93164ZM8.25032 15.2503C8.24272 15.2507 8.23512 15.251 8.22762 15.251C8.03774 15.251 7.87834 15.1031 7.86653 14.9111L7.5103 9.14059C7.49803 8.94092 7.64992 8.76907 7.8495 8.75681C8.04845 8.74472 8.22102 8.89624 8.23329 9.09601L8.58943 14.8665C8.60179 15.0662 8.44991 15.2379 8.25032 15.2503ZM10.3699 14.8888C10.3699 15.0888 10.2077 15.2509 10.0077 15.2509C9.80763 15.2509 9.64549 15.0888 9.64549 14.8888V9.11826C9.64549 8.91821 9.80763 8.75607 10.0077 8.75607C10.2076 8.75607 10.3699 8.91821 10.3699 9.11826V14.8888ZM12.497 9.13959L12.1569 14.9101C12.1456 15.1025 11.9859 15.2509 11.7957 15.2509L11.7809 15.2507L11.7741 15.2504C11.5744 15.2386 11.4221 15.0672 11.4339 14.8675L11.7739 9.09692C11.7856 8.89725 11.9565 8.7449 12.1567 8.75671C12.3564 8.76843 12.5087 8.93991 12.497 9.13959ZM14.418 6.10096L14.6559 6.81397C14.7017 6.95139 14.642 7.09165 14.5306 7.16159C14.4853 7.19016 14.4315 7.20728 14.3724 7.20728H5.63498C5.57593 7.20728 5.52218 7.19016 5.47677 7.16169C5.36535 7.09174 5.30566 6.95148 5.35153 6.81397L5.58938 6.10096C5.65201 5.913 5.82806 5.7862 6.02618 5.7862H13.9811C14.1793 5.7862 14.3553 5.913 14.418 6.10096Z"
            fill="#A6A6A6"
          />
        </svg>
      </div>
    </li>
  );
}
