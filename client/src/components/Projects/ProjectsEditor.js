import React, { Component } from 'react';
import { connect } from 'react-redux';

import projectsOperations from '../../redux/projects/projectsOperations';

class ProjectEditor extends Component {
  state = {
    ProjectName: '',
    descr: '',
    color: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    console.log(this.state);
    console.log(e);
    e.preventDefault();
    this.props.onAddProject(this.state);
  };

  render() {
    const { projectName, descr, color } = this.state;
    return (
      <>
        <h2>Add Project</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label htmlFor="projectName">
            Project Name
            <br />
            <input
              type="text"
              value={projectName}
              onChange={this.handleChange}
              name="projectName"
            />
          </label>
          <label htmlFor="descr">
            description
            <br />
            <input
              type="text"
              value={descr}
              onChange={this.handleChange}
              name="descr"
            />
          </label>
          <label>
            color
            <br />
            <select value={color} name="color" onChange={this.handleChange}>
              <option style={{ background: '#8c72df' }} value="#8c72df">
                medium purple
              </option>
              <option style={{ background: '#71DF87' }} value="#71DF87">
                green
              </option>
              <option style={{ background: '#FF765F' }} value="#FF765F">
                orange
              </option>
            </select>
          </label>

          <button type="submit">Add project</button>
        </form>
      </>
    );
  }
}
const mapStateToProps = state => {
  return state.projects;
};

const mapDispatchToProps = {
  onAddProject: projectsOperations.addProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditor);
