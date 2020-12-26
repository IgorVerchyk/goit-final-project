import React from 'react';
// import { useLocation } from "react-router-dom";

// import FormLogin from '../FormLogin/FormLogin';
// import FormRegistration from '../FormRegistration/FormRegistration';

import s from './AuthenticationsBlock.module.scss';

export default function AuthenticationsViews({ children }) {
  // const location = useLocation();

  // const getCurrentPage = () => {
  //   if (location.pathname === "/registration") {
  //     return <FormRegistration />;
  //   } else if (location.pathname === "/login") {
  //     return <FormLogin />;
  //   }
  // };

  return (
    <div className={s.wrapperPage}>
      <div className={s.circleBg}></div>
      <div className={s.wrapperForBg}>{children}</div>
    </div>
  );
}
