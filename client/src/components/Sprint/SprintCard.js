import React from 'react';
import { Link } from 'react-router-dom';

export default function SprintCard(sprint) {
  console.log(sprint);
  const { routeTo, id, description, startDate, finDate } = sprint;
  return (
    <li>
      <Link to={routeTo} className="link" id={id}>
        <h2>{description}</h2>
        <p>{startDate}</p>
        <p>{finDate}</p>
      </Link>
    </li>
  );
}
