import { connect } from 'react-redux';
import ProjectsListItems from './ProjectsListItems';
import projectsSelectors from '../../redux/projects/projectsSelectors';

const mapStateToProps = state => ({
  projects: projectsSelectors.getAllProjects(state),
});

export default connect(mapStateToProps)(ProjectsListItems);
