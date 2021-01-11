import React from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import ProjectEditor from './ProjectEditor';
import SprintCard from '../Sprint/SprintCard';

import s from './SingleProject.module.scss';

export default function Project(props) {
  const projectId = props.id.location.state.id;

  const project = useSelector(state =>
    state.auth.currentUser.projects.find(project => project._id === projectId),
  );
  const allProjects = useSelector(state => state.auth.currentUser.projects);
  const type = 'проект';
  const backTo = '/';
  const descr = project.descr;

  return (
    <div className={s.container}>
      <Sidebar
        type={type}
        list={[...allProjects]}
        backTo={backTo}
        children={ProjectEditor}
      />
      <div className={s.project}>
        <h3 className={s.projectTitle}>{project.title}</h3>
        <div className={s.editTitle}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99967 0C4.47707 0 0 4.4774 0 9.9998C0 15.5222 4.47707 20 9.99967 20C15.5223 20 19.9999 15.5225 19.9999 9.9998C19.9999 4.47713 15.5223 0 9.99967 0ZM14.7534 7.19633L13.8036 8.14613L11.8702 6.21287L11.1367 6.94633L13.0701 8.87973L8.328 13.6215L6.39473 11.6884L5.66127 12.4219L7.59453 14.3551L7.122 14.8277L7.113 14.8187C7.0606 14.9049 6.9754 14.9679 6.8742 14.9903L5.07133 15.3923C5.04433 15.3984 5.01687 15.4013 4.98973 15.4013C4.89133 15.4013 4.79573 15.3626 4.72487 15.2915C4.63393 15.2009 4.59607 15.0701 4.62407 14.9447L5.02587 13.1423C5.04853 13.0412 5.1116 12.9558 5.19773 12.9035L5.1886 12.8944L12.8199 5.26273C12.9318 5.15107 13.1135 5.15107 13.2254 5.26307L14.7535 6.79087C14.8654 6.90273 14.8654 7.08447 14.7534 7.19633Z"
              fill="#A6A6A6"
            />
          </svg>
        </div>
        <p className={s.descr}>{descr}</p>
        <p className={s.addPeople}>додати людей</p>
      </div>

      <ul className={s.list}>
        {project.sprints.map(sprint => (
          <SprintCard
            routeTo={`/projects/${projectId}/${sprint.id}`}
            key={sprint.objectId}
            {...sprint}
          />
        ))}
      </ul>
    </div>
  );
}
