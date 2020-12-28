import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import SingleProjectCard from '../SingleProjectСard/SingleProjectCard.js';
import ProjectEditor from './ProjectEditor';
import Modal from '../Modal/Modal';

import s from './Projects.module.scss';

export default function ProjectsListItems({ projects }) {
  const { url } = useRouteMatch();
  const [isModal, setisModal] = useState(false);

  const handleClick = e => {
    console.log(e);
    setisModal(true);
  };

  return (
    <section className={s.projects}>
      <h2 className={s.title}>Проекти</h2>
      <ul className={s.list}>
        {projects.map(({ id, projectName, descr, color }) => (
          <SingleProjectCard
            key={id}
            projectName={projectName}
            descr={descr}
            color={color}
            routeTo={`${url}/${id}`}
          ></SingleProjectCard>
        ))}
      </ul>
      <div className={s.addNewWrapper}>
        {!isModal ? (
          <>
            <span className={s.addNewText}>Створити новий проект</span>
            <div className={s.add} onClick={handleClick}></div>
          </>
        ) : (
          <Modal isOpen="true" children={<ProjectEditor />} />
        )}
      </div>
    </section>
  );
}
