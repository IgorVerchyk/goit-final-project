import React, { useEffect } from 'react';

import CloseBtn from '../CloseBtn/CloseBtn';
import s from './Modal.module.scss';

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return window.removeEventListener('keydown', handleKeyDown);
  }, [closeModal]);

  const handleClickOpen = e => {
    if (
      e.target.id === 'backdrop' ||
      e.target.nodeName === 'svg' ||
      e.target.nodeName === 'path'
    ) {
      closeModal();
    }
  };

  return (
    <div className={s.backdrop} id="backdrop" onClick={handleClickOpen}>
      <div className={s.overlay} onClick={handleClickOpen}>
        <div className={s.close} onClick={handleClickOpen}>
          <CloseBtn />
        </div>
        <div className={s.modalBody} onClick={handleClickOpen}>
          {children}
        </div>
      </div>
    </div>
  );
}
