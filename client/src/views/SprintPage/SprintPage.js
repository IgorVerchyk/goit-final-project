import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './SprintPage.module.scss';
import SprintHeader from '../../components/Sprint/SprintHeader/SprintHeader';
import ChartModal from '../../components/ChartModal';
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
  const sprint = project.sprints.find(sprint => sprint._id === sprintId);

  const handleInputFilter = ev => {
    setFilter(ev.target.value);
  };

  const setShowModal = () => {
    setModalAdd(!onModalAdd);
  };

  function getDates(startDate, endDate) {
    const dateArray = [];
    let currentDate = moment(startDate);
    const stopDate = moment(endDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format('MMM Do'));
      currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
  }
  const dateArr = getDates(sprint.startDate, sprint.endDate);

  const filterTasks = (tasks, filter) => {
    return tasks.filter(task =>
      task.descr.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  let filtredTasks =
    filter.length > 0 ? filterTasks(sprint.tasks, filter) : sprint.tasks;

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
        <SprintHeader
          handleInput={handleInputFilter}
          title={sprint.title}
          id={sprint._id}
          dateArr={dateArr}
        />

        <ul className={styles.list}>
          {filtredTasks.map(task => (
            <TaskCard
              id={task._id}
              key={task._id}
              title={task.descr}
              scheduledTime={task.planTime}
              spentTime={task.spendTime}
              spentAllTime={task.total}
            />
          ))}
        </ul>

        {/* //////////////////AddButton//////////////////// */}
        <div className={styles.createTask}>
          <ButtonAddNew setShowModal={setShowModal} />
          <p className={styles.createTaskText}>Створити задачу</p>
        </div>
        {/* ////////////////////////////////////////////// */}
      </section>
      {/* /////////////ModalTasks/////////////////////// */}

      {onModalAdd && (
        <Modal closeModal={setShowModal}>
          <TaskAddForm
            onClick={setShowModal}
            onClose={setShowModal}
            sprintId={sprintId}
          />
        </Modal>
      )}
      {sprint.tasks.length > 1 && <ChartModal sprint={sprint} arr={dateArr} />}
      {/* ////////////////////////////////////////////// */}
    </section>
  );
}

export default SprintPage;
