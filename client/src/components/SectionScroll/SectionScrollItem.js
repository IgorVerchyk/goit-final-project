import React from 'react';
import { Link } from 'react-router-dom';

import s from './SectionScroll.module.scss';

export default function SectionScrollItem({ id, title, descr }) {
  const link = `projects/:${id}`;
  return (
    <li className={s.scrollItem}>
      <Link to={link}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.text}>{descr}</p>
      </Link>
    </li>
  );
}
