import React, { useState } from 'react';
import styles from './SprintPage.module.scss';
import SprintHeader from '../../components/SprintHeader/SprintHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import TaskCard from '../../components/TaskCard/TaskCard';
import ButtonAddNew from '../../components/Buttons/ButtonAddNew/ButtonAddNew';
import ButtonShowGraph from '../../components/Buttons/ButtonShowGraph/ButtonShowGraph';
import Modal from '../../components/Modal/Modal';
import SprintEditor from '../../components/Sprints/SprintEditor';

export default function SprintPage() {
  const [isModal, setisModal] = useState(false);

  const toggleModal = () => {
    const toggledIsOpen = isModal ? false : true;
    setisModal(toggledIsOpen);
  };
  const array = [
    { id: 1, title: 'Sprint 1', color: '#00ff00' },
    { id: 2, title: 'Very long name of boring sprint' },
    { id: 3, title: 'Sprint3' },
    { id: 4, title: 'zzzzzzzzzz zzzzzzzz xxxxx' },
  ];

  const tasks = [
    { id: 1, title: 'Task 1', scheduledTime: 8, spentAllTime: 33 },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      scheduledTime: 28,
      spentAllTime: 11,
    },
    {
      id: 4,
      title: 'xxxzcqwd asdqw aaaasd',
      scheduledTime: 19,
      spentAllTime: 0,
    },
    {
      id: 5,
      title: 'Excepteur sint occaecat cupidatat',
      scheduledTime: 333,
      spentAllTime: 33,
    },
    { id: 6, title: 'Task 1', scheduledTime: 8, spentAllTime: 33 },
    {
      id: 7,
      title: 'Lorem ipsum dolor sit amet',
      scheduledTime: 28,
      spentAllTime: 11,
    },
    {
      id: 8,
      title: 'xxxzcqwd asdqw aaaasd',
      scheduledTime: 19,
      spentAllTime: 0,
    },
    {
      id: 9,
      title: 'Excepteur sint occaecat cupidatat',
      scheduledTime: 333,
      spentAllTime: 33,
    },
  ];
  return (
    <section className={styles.sprint}>
      <Sidebar
        type={'спринт'}
        list={array}
        addNew={toggleModal}
        backTo={() => {
          console.log('Back to ...');
        }}
      />

      <section className={styles.tasks}>
        <SprintHeader />

        <ul className={styles.list}>
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              scheduledTime={task.scheduledTime}
              spentAllTime={task.spentAllTime}
            />
          ))}
        </ul>
        <div className={styles.createTask}>
          <ButtonAddNew />
          <p className={styles.createTaskText}>Створити задачу</p>
        </div>

        <div className={styles.showGraph}>
          <ButtonShowGraph />
        </div>
      </section>
      {isModal && (
        <Modal
          closeModal={toggleModal}
          children={<SprintEditor onClose={toggleModal} />}
        />
      )}
    </section>
  );
}
