import { connect } from 'react-redux';
import TasksListItems from './TasksListItems';
import tasksSelectors from '../../redux/tasks/tasksSelectors';

const mapStateToProps = state => ({
  tasks: tasksSelectors.getAllTasks(state),
});

export default connect(mapStateToProps)(TasksListItems);
