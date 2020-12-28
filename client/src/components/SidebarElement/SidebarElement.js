import React from 'react';
import styles from './SidebarElement.module.scss';

export default function SidebarElement({ id, title, color }) {
  let logoClass = color ? styles.logo : styles.logoShadow;
  return (
    <li className={styles.el}>
      <div
        className={logoClass}
        style={{
          backgroundColor: color ? color : '#fff',
        }}
      ></div>
      <p className={styles.text}>{title}</p>
    </li>
  );
}
