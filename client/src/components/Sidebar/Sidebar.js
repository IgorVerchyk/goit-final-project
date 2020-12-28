import React from 'react';
import SidebarElement from '../SidebarElement/SidebarElement';
import ButtonAddNew from '../Buttons/ButtonAddNew/ButtonAddNew';

import styles from './Sidebar.module.scss';

export default function Sidebar({ type, list, addNew, backTo }) {
  return (
    <section className={styles.sidebar}>
      <div className={styles.backToAll}>
        <p className={styles.backToAllText} onClick={backTo}>
          Показати <span className={styles.backToAllTextAccent}>{type}и</span>
        </p>
      </div>

      <ul className={styles.list}>
        {list.map(el => (
          <SidebarElement key={el.id} title={el.title} color={el.color} />
        ))}
      </ul>

      <div className={styles.addNew} onClick={addNew}>
        <ButtonAddNew />
        <p className={styles.addNewText}>Створити {type}</p>
      </div>
    </section>
  );
}
