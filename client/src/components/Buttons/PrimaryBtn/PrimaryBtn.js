import React from "react";

import s from "./PrimaryBtn.module.scss";

export default function PrimaryBtn({ text }) {
  return (
    <button className={`${s.primaryBtn} ${s.btnSubmit}`} type={"submit"}>
      {text}
    </button>
  );
}
