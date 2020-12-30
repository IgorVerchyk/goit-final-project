import { connect } from 'react-redux';
import ProjectsListItems from './ProjectsListItems';
import { getAllProjects } from '../../redux/projects/projectsSelectors';
import projectsOperations from '../../redux/projects/projectsOperations';

const mapStateToProps = state => ({
  projects: getAllProjects(state),
});
const mapDispatchToProps = {
  onRemove: projectsOperations.removeProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsListItems);
