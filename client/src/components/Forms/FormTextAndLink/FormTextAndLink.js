import React from "react";
import { Link } from "react-router-dom";

import s from "./FormTextAndLink.module.scss";

export default function FormTextAndLink({ accauntText, routeTo, linkText }) {
  return (
    <div className={s.accauntInfo}>
      <span>{accauntText}</span>
      <Link className={s.accauntInfoLink} to={routeTo}>
        {linkText}
      </Link>
    </div>
  );
}
