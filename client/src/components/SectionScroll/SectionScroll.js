import React, { useEffect, useState } from 'react';

import SectionScrollItem from './SectionScrollItem';

import styles from './SectionScroll.module.scss';

export default function SectionScroll({ arr }) {
  console.log(arr);

  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);

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
      <button className={styles.scrollButtom} onClick={decrementIndex}>
        ...
      </button>
      <ul className={styles.scrollList}>
        {list.map(listItem => (
          <SectionScrollItem key={listItem._id} {...listItem} />
        ))}
      </ul>
      <button className={styles.scrollButtom} onClick={incrementIndex}>
        ...
      </button>
    </div>
  );
}
