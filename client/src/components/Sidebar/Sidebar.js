import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    <div className={styles.sidebar}>
      <div className={styles.backToAll}>
        <Link className={styles.backToAllText} to={backTo}>
          Показати <span className={styles.backToAllTextAccent}>{type}и</span>
        </Link>
      </div>

      <SectionScroll arr={list} />

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
    </div>
  );
}
