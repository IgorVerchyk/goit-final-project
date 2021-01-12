import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectsList from '../components/Projects/ProjectsList';

class Projects extends Component {

  render() {
    return (
      <>
        <ProjectsList />
      </>
    );
  }
}


const mapDispatchToProps = {};


export default connect(null, mapDispatchToProps)(Projects);
