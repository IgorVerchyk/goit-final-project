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
  const handleClick = () => {
    onRemove();
  };


  return (
    <li className={styles.el} style={{ backgroundColor: color }}>
      <Link
        to={{
          pathname: `${routeTo}`,
          state: { id: id },
        }}
        className={styles.a}
        id={{ id }}
      >
        <h2 className={styles.title}>{projectName}</h2>
        <p className={styles.text}>{descr}</p>
      </Link>
      <div className={styles.trash} onClick={handleClick}>
        <TrashBtn />
      </div>
    </li>
  );
}
