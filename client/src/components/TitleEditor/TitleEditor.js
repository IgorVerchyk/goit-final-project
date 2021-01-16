import React, { useCallback, useState } from 'react';
import projectsOperations from '../../redux/projects/projectsOperations';
import { useDispatch } from 'react-redux';

import styles from './TitleEditor.module.scss';

export default function TitleEditor(id, title, route) {
  const [isActive, setIsActive] = useState(false);

  const toRedactTitle = () => {
    setIsActive(!isActive);
  };

  const dispatch = useDispatch();

  const body = title;

  const onChangeTitle = useCallback(
    () => dispatch(projectsOperations.updateDocument({ id, route, body })),
    [dispatch, id, route, body],
  );
  return (
    <form onClick={toRedactTitle}>
      <input
        input
        type="string"
        value={title}
        className={styles.projectTitle}
        disabled={!isActive}
      />
    </form>
  );
}
