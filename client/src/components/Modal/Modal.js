import React, { Component } from 'react';

import CloseBtn from '../CloseBtn/CloseBtn';
import s from './Modal.module.scss';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleClickOpen = e => {
    if (
      e.target.id === 'backdrop' ||
      e.target.nodeName === 'svg' ||
      e.target.nodeName === 'path'
    ) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={s.backdrop} id="backdrop" onClick={this.handleClickOpen}>
        <div className={s.overlay} onClick={this.handleClickOpen}>
          <div className={s.close} onClick={this.handleClickOpen}>
            <CloseBtn />
          </div>
          <div className={s.modalBody} onClick={this.handleClickOpen}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
