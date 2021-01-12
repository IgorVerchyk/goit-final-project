import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import ProjectEditor from './ProjectEditor';
import AddPeopleEditor from '../AddPeopleEditor/AddPeopleEditor';
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
    state.auth.currentUser.projects.find(project => project._id === projectId),
  );

  const allProjects = useSelector(state => state.auth.currentUser.projects);
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

      <div className={s.addPeopleBlock}>
        {!isModal ? (
          <>
            <p className={s.addPeople} onClick={toggleModal}>
              Додати людей
            </p>
            <div className={s.addPeopleIcon}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5806 13.1483C11.0916 12.8072 10.569 12.5291 10.0224 12.3167C10.7495 11.6559 11.2318 10.7301 11.3158 9.69376C12.4184 8.61939 13.8637 8.0304 15.413 8.0304C16.6226 8.0304 17.784 8.39462 18.7718 9.08356C19.1258 9.33045 19.6126 9.24378 19.8595 8.88977C20.1062 8.53592 20.0195 8.04901 19.6657 7.80228C19.1766 7.46109 18.6539 7.18323 18.1073 6.97067C18.9096 6.24146 19.4141 5.18997 19.4141 4.02298C19.4141 1.82617 17.6269 0.0390625 15.4301 0.0390625C13.2335 0.0390625 11.4464 1.82617 11.4464 4.02298C11.4464 5.18524 11.9467 6.23291 12.7435 6.96182C12.6344 7.00379 12.5259 7.04819 12.4185 7.09549C11.9296 7.31064 11.47 7.57523 11.0426 7.8859C10.4532 6.42151 9.01808 5.38513 7.34526 5.38513C5.1486 5.38513 3.36134 7.17224 3.36134 9.3689C3.36134 10.528 3.85893 11.5727 4.65147 12.3013C2.53248 13.0952 0.814339 14.8004 0.114875 16.9751C-0.117058 17.6962 0.00577492 18.461 0.451942 19.0733C0.89811 19.6855 1.58842 20.0366 2.34586 20.0366H9.14198C9.57335 20.0366 9.92308 19.6869 9.92308 19.2554C9.92308 18.824 9.57335 18.4743 9.14198 18.4743H2.34586C2.09333 18.4743 1.86323 18.3572 1.71446 18.1531C1.56568 17.9489 1.52479 17.6939 1.602 17.4535C2.37409 15.053 4.72883 13.3765 7.32817 13.3765C8.53758 13.3765 9.69908 13.7407 10.6869 14.4296C11.0408 14.6765 11.5277 14.5897 11.7746 14.2358C12.0213 13.882 11.9346 13.3951 11.5806 13.1483ZM15.4301 1.60141C16.7654 1.60141 17.8517 2.68768 17.8517 4.02298C17.8517 5.35812 16.7654 6.44455 15.4301 6.44455C14.095 6.44455 13.0086 5.35812 13.0086 4.02298C13.0086 2.68768 14.095 1.60141 15.4301 1.60141ZM7.34526 6.94733C8.68056 6.94733 9.76683 8.03375 9.76683 9.3689C9.76683 10.7042 8.68056 11.7905 7.34526 11.7905C6.00996 11.7905 4.92369 10.7042 4.92369 9.3689C4.92369 8.03375 6.00996 6.94733 7.34526 6.94733ZM20 16.3261C20 16.7575 19.6503 17.1072 19.2187 17.1072H17.0706V19.2554C17.0706 19.6869 16.7209 20.0366 16.2895 20.0366C15.858 20.0366 15.5083 19.6869 15.5083 19.2554V17.1072H13.3601C12.9288 17.1072 12.579 16.7575 12.579 16.3261C12.579 15.8946 12.9288 15.5449 13.3601 15.5449H15.5083V13.3968C15.5083 12.9654 15.858 12.6157 16.2895 12.6157C16.7209 12.6157 17.0706 12.9654 17.0706 13.3968V15.5449H19.2187C19.6503 15.5449 20 15.8946 20 16.3261Z"
                  fill="#181C27"
                />
              </svg>
            </div>
          </>
        ) : (
          <Modal
            closeModal={toggleModal}
            children={<AddPeopleEditor onClose={toggleModal} project={project} />}
          />
        )}
      </div>

      <ul className={s.list}>
        {project.sprints.map(sprint => (
          <SprintCard key={sprint.objectId} {...sprint} />
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
