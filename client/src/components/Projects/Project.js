import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SectionScroll from '../SectionScroll/SectionScroll';
import SprintCard from '../Sprint/SprintCard';

import s from './Projects.module.scss';

export default function Project(id) {
  const { projectId } = useParams();

  const projects = useSelector(state => state.projects.items);
  const sprints = projects.find(item => item.id === projectId).sprints;
  console.log(sprints);
  return (
    <div>
      {/* <SectionScroll /> */}
      <ul className={s.scrollList}>
        {sprints.map(sprint => (
          <SprintCard
            routeTo={`/projects/${projectId}/${sprint.id}`}
            key={sprint.id}
            {...sprint}
          />
        ))}
      </ul>
    </div>
  );
}
