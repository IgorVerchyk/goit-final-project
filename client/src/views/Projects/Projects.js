import React from 'react';
import ButtonAddNew from '../../components/Buttons/ButtonAddNew/ButtonAddNew';
import SingleProjectCard from '../../components/SingleProjectСard/SingleProjectCard.js';
import styles from './Projects.module.scss';

const projects = [
  { id: 1, title: 'ProjectName', about: 'Lorem', color: '#ff0000' },
  { id: 2, title: 'ProjectName', about: 'Lorem', color: '#ffcc00' },
  { id: 3, title: 'ProjectName', about: 'Lorem', color: '#009900' },
  { id: 4, title: 'ProjectName', about: 'Lorem', color: '#009999' },
  { id: 5, title: 'ProjectName', about: 'Lorem', color: '#00f00f' },
  { id: 6, title: 'ProjectName', about: 'Lorem', color: '#ff00ff' },
  { id: 7, title: 'ProjectName', about: 'Lorem', color: '#330066' },
];
export default function Projects() {
  return (
    <>
      <section className={styles.projects}>
        <h2 className={styles.title}>Проекти</h2>

        <ul className={styles.list}>
          {projects.map(project => (
            <SingleProjectCard
              key={project.id}
              color={project.color} //убрать, когда будет стор
            />
          ))}
        </ul>

        <div className={styles.addNewWrapper}>
          <span className={styles.addNewText}>Створити проект</span>
          <ButtonAddNew />
        </div>
      </section>
      {/* {loading && <Loader />} */}
    </>
  );
}
