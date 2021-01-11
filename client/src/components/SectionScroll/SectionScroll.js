import React, { useEffect, useState } from 'react';

import SectionScrollItem from './SectionScrollItem';

import s from './SectionScroll.module.scss';

export default function SectionScroll({ arr }) {
  console.log(arr);

  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(
      arr.map(
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
    <div className={s.scrollContainer}>
      <button className={s.scrollButtom} onClick={decrementIndex}>
        ...
      </button>
      <ul className={s.scrollList}>
        {list.map(listItem => (
          <SectionScrollItem key={listItem.objectId} {...listItem} />
        ))}
      </ul>
      <button className={s.scrollButtom} onClick={incrementIndex}>
        ...
      </button>
    </div>
  );
}
