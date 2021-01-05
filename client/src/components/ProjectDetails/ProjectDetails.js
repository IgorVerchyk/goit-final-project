import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Modal from '../Modal/Modal';

export default function ProjectDetails() {
  const { projectId } = useParams();

  const projects = useSelector(state => state.projects.items);
  const project = projects.find(item => item.id === projectId);

  const [isModal, setisModal] = useState(false);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };

  return (
    <>
      <h2>Project: {project.projectName}</h2>
      <div>Додати людей</div>
      {!isModal ? (
        <>
          <button className="addNew" onClick={toggleModal}>
            Створити спринт
          </button>
        </>
      ) : (
        <Modal closeModal={toggleModal} children={''} />
      )}

      <ul>
        {project.sprints.map(sprint => (
          <li key={sprint.id}>
            <Link to={`/${projectId}/${sprint.id}`}>
              <h2>{sprint.description}</h2>
              <p>{sprint.startDate}</p>
              <p>{sprint.finDate}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
