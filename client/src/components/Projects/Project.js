import React from 'react';
import { useSelector } from 'react-redux';

import SectionScroll from '../SectionScroll/SectionScroll';
import SprintCard from '../Sprint/SprintCard';

import s from './Projects.module.scss';

export default function Project(id) {
  const sprints = useSelector(state => state.projects(id).sprints);
  return (
    <div>
      <SectionScroll />
      <ul className={s.scrollList}>
        {sprints.map(sprint => (
          <SprintCard key={sprint.objectId} {...sprint} />
        ))}
      </ul>
    </div>
  );
}
