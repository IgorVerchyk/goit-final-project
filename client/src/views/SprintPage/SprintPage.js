import React, { useState } from 'react';
import styles from './SprintPage.module.scss';
import SprintHeader from '../../components/Sprint/SprintHeader/SprintHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import TaskCard from '../../components/Sprint/TaskCard/TaskCard';
import ButtonAddNew from '../../components/Buttons/ButtonAddNew/ButtonAddNew';
import ButtonShowGraph from '../../components/Buttons/ButtonShowGraph/ButtonShowGraph';
import Modal from '../../components/Modal/Modal';
import TaskAddForm from '../../components/TaskAddForm/TaskAddForm';
import SprintAddForm from '../../components/Sprint/SprintAddForm/SprintAddForm';

export default function SprintPage() {
  const [onModalAdd, setModalAdd] = useState(false);
  const [filter, setFilter] = useState('');

  const handleInputFilter = ev => {
    setFilter(ev.target.value);
  };

  const setShowModal = () => {
    setModalAdd(!onModalAdd);
  };

  const deleteTask = () => {
    console.log('deleted');
  };
  //////////валидация и отправка/////
  const changeSpentTime = () => {};

  /////////////////////////////////
  const array = [
    { id: 1, title: 'Sprint 1', color: '#00ff00' },
    { id: 2, title: 'Very long name of boring sprint' },
    { id: 3, title: 'Sprint3' },
    { id: 4, title: 'zzzzzzzzzz zzzzzzzz xxxxx' },
  ];

  const tasks = [
    {
      id: 1,
      title: 'Task 1',
      scheduledTime: 8,
      spentTime: 2,
      spentAllTime: 33,
    },
    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      scheduledTime: 28,
      spentTime: '',
      spentAllTime: 11,
    },
    {
      id: 4,
      title: 'xxxzcqwd asdqw aaaasd',
      scheduledTime: 19,
      spentTime: 6,
      spentAllTime: 0,
    },
    {
      id: 5,
      title: 'Excepteur sint occaecat cupidatat',
      scheduledTime: 333,
      spentTime: '',
      spentAllTime: 33,
    },
    {
      id: 6,
      title: 'Task 1',
      scheduledTime: 8,
      spentTime: 2,
      spentAllTime: 33,
    },
    {
      id: 7,
      title: 'Lorem ipsum dolor sit amet',
      scheduledTime: 28,
      spentTime: 11,
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

  const sprintTitle = 'Sprint Burndown Chart 1';

  const filterTasks = (tasks, filter) => {
    return tasks.filter(task =>
      task.title.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  let filtredTasks = filter.length > 0 ? filterTasks(tasks, filter) : tasks;

  return (
    <section className={styles.sprint}>
      {/* ////////////////Sidebar///////////////////// */}
      <Sidebar
        type={'спринт'}
        // list={}
        list={array}
        backTo={() => {
          console.log('Back to ...');
        }}
      >
        <SprintAddForm />
      </Sidebar>
      {/* ////////////////////////////////////////////// */}

      <section className={styles.tasks}>
        <SprintHeader handleInput={handleInputFilter} title={sprintTitle} />

        <ul className={styles.list}>
          {filtredTasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              scheduledTime={task.scheduledTime}
              spentTime={task.spentTime}
              spentAllTime={task.spentAllTime}
              onDelete={deleteTask}
              changeSpentTime={changeSpentTime}
            />
          ))}
        </ul>

        {/* //////////////////AddButton//////////////////// */}
        <div className={styles.createTask}>
          <ButtonAddNew setShowModal={setShowModal} />
          <p className={styles.createTaskText}>Створити задачу</p>
        </div>
        {/* ////////////////////////////////////////////// */}

        <div className={styles.showGraph}>
          <ButtonShowGraph />
        </div>
      </section>
      {/* /////////////ModalTasks/////////////////////// */}

      {onModalAdd && (
        <Modal onCloseModal={setShowModal}>
          <TaskAddForm onClick={setShowModal} onCloseModal={setShowModal} />
        </Modal>
      )}
      {/* ////////////////////////////////////////////// */}
    </section>
  );
}
