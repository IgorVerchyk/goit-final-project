import React, { Component } from 'react';
import { connect } from 'react-redux';

// import ProjectsEditor from '../components/Projects/ProjectsEditor';
import ProjectsList from '../components/Projects/ProjectsList';
import projectsOperations from '../redux/projects/projectsOperations';

class Projects extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }

  render() {
    return (
      <>
        {/* <ProjectsEditor /> */}
        <ProjectsList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchProjects: projectsOperations.fetchProjects,
};

export default connect(null, mapDispatchToProps)(Projects);
