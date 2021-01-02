import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import SingleProjectCard from '../SingleProjectСard/SingleProjectCard.js';
import ProjectEditor from './ProjectEditor';
import Modal from '../Modal/Modal';

import s from './Projects.module.scss';

export default function ProjectsListItems({ projects, onRemove }) {
  const { url } = useRouteMatch();
  const [isModal, setisModal] = useState(false);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  return (
    <section className={s.projects}>
      <h2 className={s.title}>Проекти</h2>
      <ul className={s.list}>
        {projects.map(({ id, projectName, descr, color }) => (
          <SingleProjectCard
            id={id}
            key={id}
            projectName={projectName}
            descr={descr}
            color={color}
            routeTo={`/${id}`}
            onRemove={() => onRemove(id)}
          ></SingleProjectCard>
        ))}
      </ul>
      <div className={s.addNewWrapper}>
        {!isModal ? (
          <>
            <span className={s.addNewText}>Створити новий проект</span>
            <div className={s.add} onClick={toggleModal}></div>
          </>
        ) : (
          <Modal
            closeModal={toggleModal}
            children={<ProjectEditor onClose={toggleModal} />}
          />
        )}
      </div>
    </section>
  );
}
