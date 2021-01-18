import React, { useEffect, useState } from 'react';

import SectionScrollItem from './SectionScrollItem';

import styles from './SectionScroll.module.scss';

export default function SectionScroll({ arr }, route) {
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);
  const [decrButton, setDecrButton] = useState(false);

  useEffect(() => (index > 0 ? setDecrButton(true) : setDecrButton(false)), [
    index,
  ]);

  const [incrButton, setIncrButton] = useState(true);

  useEffect(
    () =>
      arr.length > 6 && index < arr.length - 6
        ? setIncrButton(true)
        : setIncrButton(false),
    [arr, index],
  );

  useEffect(() => {
    setList(
      arr.filter(
        project =>
          arr.indexOf(project) >= index && arr.indexOf(project) < index + 6,
      ),
    );
  }, [index, arr]);

  const incrementIndex = () => {
    setIndex(index + 1);
  };
  const decrementIndex = () => {
    setIndex(index - 1);
  };

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.buttonContainer}>
        {' '}
        {decrButton && (
          <div className={styles.scrollButton} onClick={decrementIndex}>
            ...
          </div>
        )}
      </div>

      <ul className={styles.scrollList}>
        {list.map(listItem => (
          <SectionScrollItem key={listItem._id} {...listItem} route={route} />
        ))}
      </ul>
      <div className={styles.buttonContainer}>
        {incrButton && (
          <div className={styles.scrollButton} onClick={incrementIndex}>
            ...
          </div>
        )}
      </div>
    </div>
  );
}
