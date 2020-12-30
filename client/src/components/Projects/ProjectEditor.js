import React, { Component } from 'react';
import { connect } from 'react-redux';

import projectsOperations from '../../redux/projects/projectsOperations';
import PrimaryBtn from '../Buttons/PrimaryBtn/PrimaryBtn';
// import FormTextAndLink from '../Forms/FormTextAndLink/FormTextAndLink';

import s from './ProjectEditor.module.scss';

class ProjectEditor extends Component {
  state = {
    projectName: '',
    descr: '',
    color: '',
    errorName: false,
    errorDescr: false,
  };

  // randomColor = () => {
  //   const colors = ['#8c72df', '#71DF87', '#FF765F'];
  //   return colors[Math.floor(Math.random() * 3)];
  // };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.projectName === '') {
      this.setState({ errorName: true });
      return;
    } else if (this.state.descr === '') {
      this.setState({ errorDescr: true });
      return;
    }

    // await this.setState({ color: this.randomColor() });

    await this.props.onAddProject(this.state);
    this.props.onClose();
  };

  handleCanselingBtn = e => {
    console.log(e);
    this.props.onClose();
    this.setState({ projectName: '', descr: '', color: '' });
    console.log(this.state);
  };

  render() {
    const { projectName, descr, color } = this.state;
    return (
      <>
        <h2 className={s.title}>Створення проекту</h2>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor="projectName" className={s.formLabel}>
            Назва проекту*
            <br />
            <input
              type="text"
              value={projectName}
              onChange={this.handleChange}
              name="projectName"
              className={!this.state.errorName ? s.formInput : s.error}
            />
          </label>
          <label htmlFor="descr" className={s.formLabel}>
            Опис*
            <br />
            <input
              type="text"
              value={descr}
              onChange={this.handleChange}
              name="descr"
              className={!this.state.errorDescr ? s.formInput : s.error}
            />
          </label>
          <label className={s.formLabel}>
            Обрати колір обгортки
            <br />
            <select
              className={s.formSelect}
              value={color}
              name="color"
              onChange={this.handleChange}
            >
              <option style={{ background: '#8c72df' }} value="#8c72df">
                purple
              </option>
              <option style={{ background: '#71DF87' }} value="#71DF87">
                green
              </option>
              <option style={{ background: '#FF765F' }} value="#FF765F">
                orange
              </option>
            </select>
          </label>

          <PrimaryBtn text={'Готово'} />
          <p className={s.cansel} onClick={this.handleCanselingBtn}>
            Відміна
          </p>
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
  onCanseling: projectsOperations.cancelingProject,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEditor);
