import React, { useState } from 'react';
import ButtonAddNew from '../Buttons/ButtonAddNew/ButtonAddNew';
import Modal from '../../components/Modal/Modal';
import SectionScroll from '../SectionScroll/SectionScroll';
import styles from './Sidebar.module.scss';

export default function Sidebar({ type, list, backTo, children }) {
  const [isModal, setisModal] = useState(false);
  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  const Children = children;

  return (
    <section className={styles.sidebar}>
      <div className={styles.backToAll}>
        <p className={styles.backToAllText} onClick={backTo}>
          Показати <span className={styles.backToAllTextAccent}>{type}и</span>
        </p>
      </div>

      <SectionScroll arr={list} className={styles.list} />

      <div className={styles.addNew}>
        <ButtonAddNew setShowModal={toggleModal} />
        <p className={styles.addNewText}>Створити {type}</p>
      </div>
      {isModal && (
        <Modal
          closeModal={toggleModal}
          children={<Children onClose={toggleModal}></Children>}
        />
      )}
    </section>
  );
}
