import React from 'react';
import { Link } from 'react-router-dom';

export default function Unautorised() {
  return (
    <div>
      <div>
        <p>На жаль, Ви не авторизовані для цієї дії</p>
        <Link to="/">На головну</Link>
      </div>
    </div>
  );
}
