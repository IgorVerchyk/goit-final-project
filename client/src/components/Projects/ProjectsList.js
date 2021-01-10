import { connect } from 'react-redux';
import React, { useState } from 'react';
import { getAllProjects } from '../../redux/projects/projectsSelectors';
import projectsOperations from '../../redux/projects/projectsOperations';

import SingleProjectCard from '../SingleProjectСard/SingleProjectCard.js';
import ProjectEditor from './ProjectEditor';
import Modal from '../Modal/Modal';

import s from './Projects.module.scss';

// const onRemoveContext = React.createContext(projectOperations.removeProject());

function ProjectsList({ projects, onRemove }) {
  const [isModal, setisModal] = useState(false);

  // const onRemove = useContext(onRemoveContext);

  // const projects = useSelector(state => state.auth.currentUser.projects);
  console.log(projects);
  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  return (
    <section className={s.projects}>
      <h2 className={s.title}>Проекти</h2>
      <ul className={s.list}>
        {projects.map(({ _id: id, title: projectName, descr, color }) => (
          <SingleProjectCard
            id={id}
            key={id}
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

const mapStateToProps = state => ({
  projects: getAllProjects(state),
});
const mapDispatchToProps = {
  onRemove: projectsOperations.removeProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
