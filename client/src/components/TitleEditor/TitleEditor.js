import React, { useCallback, useState } from 'react';
import projectsOperations from '../../redux/projects/projectsOperations';
import { useDispatch } from 'react-redux';
import AutosizeInput from 'react-input-autosize';

import styles from './TitleEditor.module.scss';

export default function TitleEditor({ id, title, route }) {
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
    <div className={styles.titleContainer}>
      <form onClick={toRedactTitle}>
        <AutosizeInput
          name="title"
          type="string"
          value={title}
          placeholder={title}
          className={styles.projectTitle}
          disabled={!isActive}
          onChange={onChangeTitle}
        />
      </form>
      <div className={styles.editTitle} onClick={onChangeTitle} />
    </div>
  );
}
