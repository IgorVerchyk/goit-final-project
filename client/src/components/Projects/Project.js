import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import ProjectEditor from './ProjectEditor';
import AddSprint from '../Sprint/SprintAddForm/SprintAddForm';
import AddPeopleEditor from '../AddPeopleEditor//AddPeopleEditor';
import SprintCard from '../Sprint/SprintCard';
import Modal from '../Modal/Modal';
import AddNewBtn from '../Buttons/ButtonAddNew/ButtonAddNew';
import TitleEditor from '../TitleEditor/TitleEditor';

import s from './SingleProject.module.scss';

export default function Project(props) {
  ///modal for create project
  const [isModal, setisModal] = useState(false);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  const [isColModal, setisColModal] = useState(false);

  const toggleColModal = () => {
    setisColModal(!isColModal);
  };

  const projectId = props.id.location.state.id;
  const allProjects = useSelector(state => state.user.currentUser.projects);
  const project = useSelector(
    state =>
      state.user.currentUser.projects &&
      state.user.currentUser.projects.find(
        project => project._id === projectId,
      ),
  );

  const type = 'проект';
  const backTo = '/';
  const descr = project && project.descr;
  const route = '/projects';

  return (
    <section className={s.container}>
      <Sidebar
        type={type}
        list={allProjects && [...allProjects]}
        backTo={backTo}
        route={route}
        children={ProjectEditor}
      />
      <div className={s.projectContainer}>
        <div className={s.project}>
          <TitleEditor
            id={projectId}
            route={backTo}
            initialTitle={project && project.title}
          />

          <p className={s.descr}>{descr}</p>
          <p className={s.addPeople} onClick={setisColModal}>
            Додати людей
          </p>
        </div>

        <ul className={s.list}>
          {project &&
            project.sprints.map(sprint => (
              <SprintCard
                routeTo={`/sprints/${sprint._id}`}
                key={sprint.objectId}
                projectId={projectId}
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
          children={<AddSprint onClose={toggleModal} id={projectId} />}
        />
      )}
      {isColModal && (
        <Modal
          closeModal={toggleColModal}
          children={<AddPeopleEditor onClose={toggleColModal} props={props} />}
        />
      )}
    </section>
  );
}
