import React from 'react';
import { Link } from 'react-router-dom';

import s from './SectionScroll.module.scss';

export default function SectionScrollItem({ projectName, descr }) {
  return (
    <li className={s.scrollItem}>
      <Link>
        <h2 className={s.title}>{projectName}</h2>
        <p className={s.text}>{descr}</p>
      </Link>
    </li>
  );
}
