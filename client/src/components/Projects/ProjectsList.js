import { connect } from 'react-redux';
import ProjectsListItems from './ProjectsListItems';
import { getAllProjects } from '../../redux/projects/projectsSelectors';

const mapStateToProps = state => ({
  projects: getAllProjects(state),
});

export default connect(mapStateToProps)(ProjectsListItems);
