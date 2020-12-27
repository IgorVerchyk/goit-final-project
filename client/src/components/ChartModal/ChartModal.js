import { useState } from 'react';
import Modal from 'react-modal';

import SprintChart from './SprintChart';

import ChartModalBtn from '../Buttons/ChartModalBtn';
import CloseModalBtn from '../Buttons/CloseModalBtn';

import s from './ChartModal.module.scss';

Modal.setAppElement('body');

const ChartModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        // style={modalStyles}
        className={s.content}
        overlayClassName={s.overlay}
      >
        <CloseModalBtn onButtonClick={closeModal} />
        <h1 className={s.chartHeader}>Burndown Chart(Calendar Team)</h1>
        <SprintChart />
      </Modal>
      <ChartModalBtn onButtonClick={openModal} />
    </>
  );
};

export default ChartModal;
