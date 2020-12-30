import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectsList from '../components/Projects/ProjectsList';
import projectsOperations from '../redux/projects/projectsOperations';

class HomeView extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }

  render() {
    return (
      <>
        <ProjectsList />
      </>
    );
  }
}

const mapDispatchToProps = {
  onFetchProjects: projectsOperations.fetchProjects,
};

export default connect(null, mapDispatchToProps)(HomeView);
