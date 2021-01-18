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
      {decrButton && (
        <button className={styles.scrollButton} onClick={decrementIndex}>
          ...
        </button>
      )}
      <ul className={styles.scrollList}>
        {list.map(listItem => (
          <SectionScrollItem key={listItem._id} {...listItem} route={route} />
        ))}
      </ul>
      <button className={styles.scrollButton} onClick={incrementIndex}>
        ...
      </button>
    </div>
  );
}
