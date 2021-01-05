import React from 'react';

import styles from './TaskCard.module.scss';
import TrashBtn from '../TrashBtn/TrashBtn';

export default function Task({
  id,
  title,
  scheduledTime,
  spentAllTime,
  onRemove,
}) {
  const handleClick = () => {
    onRemove();
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
        <input type="text" className={styles.spentTime}></input>
      </div>
      <div className={styles.spentAllBlock}>
        <p className={styles.spentAllText}>Витрачено годин</p>
        <span className={styles.spentAllTime}>{spentAllTime}</span>
      </div>
      <div className={styles.trashWrapper} onClick={handleClick}>
        <TrashBtn />
      </div>
    </li>
  );
}
