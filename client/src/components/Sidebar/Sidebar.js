import React, { useState } from 'react';
import SidebarElement from '../SidebarElement/SidebarElement';
import ButtonAddNew from '../Buttons/ButtonAddNew/ButtonAddNew';
import Modal from '../../components/Modal/Modal';
import styles from './Sidebar.module.scss';

export default function Sidebar({ type, list, backTo, children }) {
  const [onModalAdd, setModalAdd] = useState(false);
  console.log(list);
  const setShowModal = () => {
    setModalAdd(!onModalAdd);
  };
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

      <div className={styles.addNew}>
        <ButtonAddNew setShowModal={setShowModal} />
        <p className={styles.addNewText}>Створити {type}</p>
      </div>
      {onModalAdd && <Modal onCloseModal={setShowModal}>{children}</Modal>}
    </section>
  );
}
