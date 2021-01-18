import React from 'react';
import { Link } from 'react-router-dom';

import s from './SectionScroll.module.scss';

export default function SectionScrollItem({ _id, title, color }, route) {
  console.log(_id, title, color);
  const link = `${route}/:${_id}`;
  const toTrimTitle = title =>
    title.length >= 15 ? title.substr(0, 15) + '...' : title;
  const redTitle = toTrimTitle(title);
  return (
    <li className={s.scrollItemContainer}>
      <Link to={link}>
        <div className={s.scrollItem}>
          <div className={s.icon} style={{ backgroundColor: color }}></div>
          <h2 className={s.title}>{redTitle}</h2>
        </div>
      </Link>
    </li>
  );
}
