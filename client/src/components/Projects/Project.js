import React from 'react';
import { useSelector } from 'react-redux';

import SectionScroll from '../SectionScroll/SectionScroll';
import SprintCard from '../Sprint/SprintCard';

import s from './Projects.module.scss';

export default function Project(props) {
  const projectId = props.id.location.state.id;

  const project = useSelector(state =>
    state.auth.currentUser.projects.find(project => project._id === projectId),
  );
  const allProjects = useSelector(state => state.auth.currentUser.projects);
  return (
    <div>
      <SectionScroll arr={[...allProjects]} />
      <ul className={s.scrollList}>
        {project.sprints.map(sprint => (
          <SprintCard key={sprint.objectId} {...sprint} />
        ))}
      </ul>
    </div>
  );
}
