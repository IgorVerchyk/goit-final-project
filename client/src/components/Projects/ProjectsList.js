import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import projectOperations from '../../redux/projects/projectsOperations';

import SingleProjectCard from '../SingleProjectСard/SingleProjectCard.js';
import ProjectEditor from './ProjectEditor';
import Modal from '../Modal/Modal';

import s from './Projects.module.scss';

const onRemoveContext = React.createContext(projectOperations.removeProject());

export default function ProjectsList() {
  const [isModal, setisModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const currentProjects = useSelector(state => state.auth.currentUser.projects);

  useEffect(() => {
    setProjects(currentProjects);
  });

  const onRemove = useContext(onRemoveContext);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  return (
    <section className={s.projects}>
      <h2 className={s.title}>Проекти</h2>
      <ul className={s.list}>
        {!projects
          ? null
          : projects.map(({ _id: id, title: projectName, descr, color }) => (
              <SingleProjectCard
                id={id}
                key={id}
                s
                projectName={projectName}
                descr={descr}
                color={color}
                routeTo={`projects/${id}`}
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
