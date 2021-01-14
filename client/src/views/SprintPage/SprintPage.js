import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import projectsOperations from '../../redux/tasks/tasksOperations';
import styles from './SprintPage.module.scss';
import SprintHeader from '../../components/Sprint/SprintHeader/SprintHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import TaskCard from '../../components/Tasks/TaskCard/TaskCard';
import ButtonAddNew from '../../components/Buttons/ButtonAddNew/ButtonAddNew';
import ButtonShowGraph from '../../components/Buttons/ButtonShowGraph/ButtonShowGraph';
import Modal from '../../components/Modal/Modal';
import TaskAddForm from '../../components/Tasks/TaskAddForm/TaskAddForm';
import SprintAddForm from '../../components/Sprint/SprintAddForm/SprintAddForm';

function SprintPage() {
  const [onModalAdd, setModalAdd] = useState(false);
  const [filter, setFilter] = useState('');
  const { projectId } = useLocation();
  const { sprintId } = useParams();
  const type = 'спринт';
  const backTo = '/sprints';

  const project = useSelector(state =>
    state.user.currentUser.projects.find(project => project._id === projectId),
  );
  const tasks = project.sprints.find(sprint => sprint._id === sprintId).tasks;

  const handleInputFilter = ev => {
    setFilter(ev.target.value);
  };

  const setShowModal = () => {
    setModalAdd(!onModalAdd);
  };

  //////////валидация и отправка/////
  const changeSpentTime = () => {};

  /////////////////////////////////

  const sprintTitle = 'Sprint Burndown Chart 1';

  const filterTasks = (tasks, filter) => {
    return tasks.filter(task =>
      task.descr.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  let filtredTasks = filter.length > 0 ? filterTasks(tasks, filter) : tasks;

  return (
    <section className={styles.sprint}>
      {/* ////////////////Sidebar///////////////////// */}
      <Sidebar
        type={type}
        list={[...project.sprints]}
        backTo={backTo}
        children={SprintAddForm}
      ></Sidebar>
      {/* ////////////////////////////////////////////// */}

      <section className={styles.tasks}>
        <SprintHeader handleInput={handleInputFilter} title={sprintTitle} />

        <ul className={styles.list}>
          {filtredTasks.map(task => (
            <TaskCard
              id={task._id}
              key={task._id}
              title={task.descr}
              scheduledTime={task.planTime}
              spentTime={task.spendTime}
              spentAllTime={task.total}
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
        <Modal closeModal={setShowModal}>
          <TaskAddForm
            onClick={setShowModal}
            onCloseModal={setShowModal}
            sprintId={sprintId}
          />
        </Modal>
      )}
      {/* ////////////////////////////////////////////// */}
    </section>
  );
}

export default SprintPage;
