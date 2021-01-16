import React, { useCallback, useState } from 'react';
import projectsOperations from '../../redux/projects/projectsOperations';
import { useDispatch } from 'react-redux';
import AutosizeInput from 'react-input-autosize';

import styles from './TitleEditor.module.scss';

export default function TitleEditor({ id, initialTitle, route }) {
  const [isActive, setIsActive] = useState(false);
  const [title, setSectionTitle] = useState(initialTitle);

  const dispatch = useDispatch();

  const body = { title };

  const onChangeTitle = useCallback(
    () => dispatch(projectsOperations.updateDocument({ id, route, body })),
    [dispatch, id, route, body],
    console.log('title', body),
  );

  const toRedactTitle = () => {
    setIsActive(!isActive);
    if (initialTitle !== title) {
      onChangeTitle();
    }
  };

  return (
    <div className={styles.titleContainer}>
      <form onSubmit={onChangeTitle}>
        <AutosizeInput
          name="title"
          type="string"
          value={title}
          placeholder={title}
          inputStyle={{ border: 'none' }}
          className={styles.projectTitle}
          disabled={!isActive}
          onChange={e => setSectionTitle(e.target.value)}
        />
      </form>
      <div className={styles.editTitle} onClick={toRedactTitle} />
    </div>
  );
}
