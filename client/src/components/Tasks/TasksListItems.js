import React from 'react';
import s from './Tasks.module.scss';

import ButtonAddNew from '../ButtonAddNew/ButtonAddNew.js';
import SingleProjectCard from '../SingleProjectСard/SingleProjectCard.js';

// function colorRandom() {
//   const color =
//     '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
//   return color;
// }

const TasksListItems = ({ tasks }) =>
  console.log('TasksList re-render') || (
    <section className={s.projects}>
      .<h2 className={s.title}>Проекти</h2>
      <ul className={s.list}>
        {tasks.map(({ id, taskName, descr, color }) => (
          <SingleProjectCard
            key={id}
            taskName={taskName}
            descr={descr}
            color={color}
          ></SingleProjectCard>
        ))}
      </ul>
      <div className={s.addNewWrapper}>
        <span className={s.addNewText}>Створити проект</span>
        <ButtonAddNew />
      </div>
    </section>
  );

export default TasksListItems;
