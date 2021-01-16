import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TrashBtn from '../TrashBtn/TrashBtn';
import styles from './SingleProjectCard.module.scss';
import projectOperations from '../../redux/projects/projectsOperations';

export default function SingleProjectCard({
  id,
  color,
  projectName,
  descr,
  routeTo,
}) {
  const route = '/';
  const dispatch = useDispatch();
  const handleClick = useCallback(
    () => dispatch(projectOperations.removeDocument(route, id)),
    [dispatch, route, id],
  );

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
