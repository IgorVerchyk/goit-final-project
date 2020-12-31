// import React from 'react';

// import styles from './Modal.module.scss';

// export default function Modal({ onCloseModal }) {
//   return (
//     <div className={styles.wrapper} onClick={onCloseModal}>
//       <div className={styles.page}></div>
//     </div>
//   );
// }
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Modal.module.scss';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('click', this.handleClick);
  }

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleClick = ({ target }) => {
    if (target.className === 'Modal_backdrop__-NAFc') {
      this.props.onCloseModal();
    }
  };
  render() {
    console.log('modal props', this.props);
    return (
      <div className={s.backdrop}>
        <div className={s.overlay}>
          <div className={s.close} onClick={this.props.onCloseModal}>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.365 14.2771L7.49676 8.40887L1.7805 14.1251L0.837928 13.1825L6.55418 7.46629L0.716307 1.62842L1.59807 0.746657L7.43594 6.58453L13.1826 0.837873L14.1252 1.78045L8.37852 7.52711L14.2468 13.3954L13.365 14.2771Z"
                fill="#181C27"
              />
            </svg>
          </div>
          <div className={s.modalBody}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
