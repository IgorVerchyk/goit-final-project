import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userOperations from '../../redux/user/userOperations';

import styles from './UserMenu.module.scss';

export default function UserMenu() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);
  const name = currentUser.email;

  const Trimmer = name => {
    if (!name) {
      return '';
    } else if (name.lenght <= 10) {
      return name;
    } else {
      return name.substr(0, 12) + '...';
    }
  };

  const getLogout = useCallback(() => dispatch(userOperations.logout()), [
    dispatch,
  ]);

  return (
    <section className={styles.userMenu}>
      <span className={styles.nameText}>{Trimmer(name)}</span>
      <button className={styles.logoutBtn} onClick={getLogout}>
        <svg
          className={styles.svg}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M15.0575 6.3238L15.0575 6.32375C15.2734 6.10772 15.6237 6.10768 15.8398 6.32378L17.4142 7.89826C18.0411 8.52509 18.0411 9.54523 17.4142 10.1721L15.8398 11.7465C15.7317 11.8546 15.5904 11.9086 15.4486 11.9086C15.3068 11.9086 15.1656 11.8546 15.0575 11.7465L15.0575 11.7465C14.8414 11.5306 14.8414 11.1804 15.0575 10.9644L15.0575 10.9644L16.1774 9.84434L16.4335 9.58828H16.0714H7.62891C7.32338 9.58828 7.07578 9.34068 7.07578 9.03516C7.07578 8.72963 7.32338 8.48203 7.62891 8.48203H16.0714H16.4335L16.1774 8.22597L15.0575 7.10592L15.0575 7.10588C14.8414 6.88995 14.8414 6.53974 15.0575 6.3238ZM12.5766 13.7812V15.1875C12.5766 16.6555 11.3821 17.85 9.91406 17.85H2.84766C1.37964 17.85 0.185156 16.6555 0.185156 15.1875V2.8125C0.185156 1.34449 1.37964 0.15 2.84766 0.15H9.91406C11.3821 0.15 12.5766 1.34449 12.5766 2.8125V4.21875C12.5766 4.52427 12.329 4.77187 12.0234 4.77187C11.7179 4.77187 11.4703 4.52427 11.4703 4.21875V2.8125C11.4703 1.9543 10.7723 1.25625 9.91406 1.25625H2.84766C1.98945 1.25625 1.29141 1.9543 1.29141 2.8125V15.1875C1.29141 16.0457 1.98945 16.7437 2.84766 16.7437H9.91406C10.7723 16.7437 11.4703 16.0457 11.4703 15.1875V13.7812C11.4703 13.4757 11.7179 13.2281 12.0234 13.2281C12.329 13.2281 12.5766 13.4757 12.5766 13.7812Z"
              stroke="#F1F2F7"
              strokeWidth="0.3"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className={styles.logoutText}>Log Out</span>
      </button>
    </section>
  );
}
