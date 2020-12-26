import React, { Component } from 'react';
import { connect } from 'react-redux';

// import TasksEditor from '../components/Tasks/TasksEditor';

import TasksList from '../components/Tasks/TasksList';
import TasksListItems from '../components/Tasks/TasksListItems';
import tasksOperations from '../redux/tasks/tasksOperations';

class Tasks extends Component {
  componentDidMount() {
    this.props.onFetchTasks();
  }

  render() {
    return (
      <>
        {/* <TasksEditor/> */}
        <TasksList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchTasks: tasksOperations.fetchTasks,
};

export default connect(null, mapDispatchToProps)(Tasks);
