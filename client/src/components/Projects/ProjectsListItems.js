import { connect } from 'react-redux';
import React, { useCallback, useState } from 'react';
import s from './Projects.module.scss';

import ButtonAddNew from '../ButtonAddNew/ButtonAddNew.js';
import SingleProjectCard from '../SingleProjectСard/SingleProjectCard.js';
import ProjectEditor from './ProjectEditor';
import Modal from '../Modal/Modal';
import projectsOperations from '../../redux/projects/projectsOperations';

// function colorRandom() {
//   const color =
//     '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
//   return color;
// }

const toggleModal = state => {
  const toggledIsOpen = state.isModal ? false : true;

  this.setState({
    isModal: toggledIsOpen,
  });
};

function ProjectsListItems({ projects, onRemove }) {
  const [isModal, setisModal] = useState(false);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  const handleClick = ({ target }) => {
    console.log(target);
    toggleModal();
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
            onClick={onRemove}
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
          <Modal
            onCloseModal={toggleModal}
            children={<ProjectEditor onCloseModal={toggleModal} />}
          />
        )}
      </div>
    </section>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(projectsOperations.removeProject(ownProps.id)),
});

export default connect(null, mapDispatchToProps)(ProjectsListItems);
