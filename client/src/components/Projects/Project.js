import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import ProjectEditor from './ProjectEditor';
import AddSprint from '../Sprint/SprintAddForm/SprintAddForm';
import SprintCard from '../Sprint/SprintCard';
import Modal from '../Modal/Modal';
import AddNewBtn from '../Buttons/ButtonAddNew/ButtonAddNew';

import s from './SingleProject.module.scss';

export default function Project(props) {
  const [isModal, setisModal] = useState(false);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  const projectId = props.id.location.state.id;

  const project = useSelector(state =>
    state.user.currentUser.projects.find(project => project._id === projectId),
  );
  const allProjects = useSelector(state => state.user.currentUser.projects);
  const type = 'проект';
  const backTo = '/';
  const descr = project.descr;

  return (
    <section className={s.container}>
      <Sidebar
        type={type}
        list={[...allProjects]}
        backTo={backTo}
        children={ProjectEditor}
      />
      <div className={s.projectContainer}>
        <div className={s.project}>
          <div className={s.titleContainer}>
            <h2 className={s.projectTitle}>{project.title}</h2>
            <div className={s.editTitle} />
          </div>
          <p className={s.descr}>{descr}</p>
          <p className={s.addPeople}>Додати людей</p>
        </div>

        <ul className={s.list}>
          {project.sprints.map(sprint => (
            <SprintCard
              routeTo={`/sprints/${sprint.id}`}
              key={sprint.objectId}
              {...sprint}
            />
          ))}
        </ul>
      </div>
      <div className={s.addSprint}>
        <AddNewBtn setShowModal={toggleModal} />
      </div>
      <p className={s.createSprint}>Створити спринт</p>
      {isModal && (
        <Modal
          closeModal={toggleModal}
          children={<AddSprint onClose={toggleModal} />}
        />
      )}
    </section>
  );
}
