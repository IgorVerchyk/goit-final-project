import { useState } from 'react';
import Modal from 'react-modal';

import SprintChart from './SprintChart';

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    maxWidth: '950px',
    height: '495px',
    top: '50%',
    left: ' 50%',
    transform: `translate(-50%, -50%)`,
    padding: '24px',
  },
};

Modal.setAppElement('body');

const ChartModal = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        shouldCloseOnOverlayClick={true}
      >
        <h1>Burndown Chart(Calendar Team)</h1>
        <SprintChart />
      </Modal>
    </div>
  );
};

export default ChartModal;
