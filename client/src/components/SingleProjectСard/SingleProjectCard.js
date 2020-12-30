import React from 'react';
import { Link } from 'react-router-dom';

import TrashBtn from '../TrashBtn/TrashBtn';
import styles from './SingleProjectCard.module.scss';

export default function SingleProjectCard({
  id,
  color,
  projectName,
  descr,
  routeTo,
  onRemove,
}) {
  const handleClick = e => {
    console.log(onRemove);
    onRemove();
    // onRemove(id);
  };
  return (
    <li className={styles.el} style={{ backgroundColor: color }}>
      <Link to={routeTo} className={styles.a}>
        <h2 className={styles.title}>{projectName}</h2>
        <p className={styles.text}>{descr}</p>
      </Link>
      <div className={styles.trash} onClick={handleClick}>
        <TrashBtn />
      </div>
    </li>
  );
}
