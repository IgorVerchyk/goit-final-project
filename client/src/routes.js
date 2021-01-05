import { lazy } from 'react';

const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/ProjectsView')),
    private: false,
    restricted: false,
  },
  {
    path: '/login',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/LoginView.js')),
    private: false,
    restricted: false,
  },
  {
    path: '/registration',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/RegisterView')),
    private: false,
    restricted: false,
  },

  {
    path: '/projects/:projectId',
    label: 'ProjectDetails',
    exact: true,
    component: lazy(() => import('./views/ProjectDetailsView')),
    private: false,
    restricted: false,
  },
  {
    path: '/projects/:projectId/:sprintId',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/SprintPage/SprintPage.js')),
    private: false,
    restricted: false,
  },
];

export default routes;
