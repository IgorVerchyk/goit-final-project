import React, { useState } from 'react';
import ButtonAddNew from '../Buttons/ButtonAddNew/ButtonAddNew';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
import SectionScroll from '../SectionScroll/SectionScroll';
import styles from './Sidebar.module.scss';

export default function Sidebar({ type, list, route, backTo, children }) {
  const [isModal, setisModal] = useState(false);
  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };
  const Children = children;

  return (
    <div className={styles.sidebar}>
      <div className={styles.backToAll}>
        <Link to={backTo}>
          <p className={styles.backToAllText}>
            Показати <span className={styles.backToAllTextAccent}>{type}и</span>
          </p>
        </Link>
      </div>

      <SectionScroll arr={list} route={route} />

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
