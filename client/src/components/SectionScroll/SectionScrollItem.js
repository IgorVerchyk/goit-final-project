import React from 'react';
import { Link } from 'react-router-dom';

import s from './SectionScroll.module.scss';

export default function SectionScrollItem({ _id, title, color }, route) {
  const link = `${route}/:${_id}`;
  const toTrimTitle = title =>
    title.length >= 15 ? title.substr(0, 15) + '...' : title;
  const redTitle = toTrimTitle(title);
  return (
    <li className={s.scrollItemContainer}>
      <Link to={link}>
        <div className={s.scrollItem}>
          <div
            className={s.icon}
            style={
              color ? { backgroundColor: color } : { backgroundColor: 'white' }
            }
          ></div>
          <h2 className={s.title}>{redTitle}</h2>
        </div>
      </Link>
    </li>
  );
}
