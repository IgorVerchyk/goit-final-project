import { lazy } from 'react';

const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/ProjectsView')),
    private: true,
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
    component: lazy(() => import('./views/RegistrationView')),
    private: false,
    restricted: false,
  },

  {
    path: '/projects/:projectId',
    label: 'ProjectDetails',
    exact: true,
    component: lazy(() => import('./views/ProjectDetailsView')),
    private: true,
    restricted: false,
  },
  {
    path: '/sprints/:sprintId',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/SprintPage/SprintPage.js')),
    private: true,
    restricted: false,
  },
  {
    path: '/unautorised',
    label: 'Unautorised',
    exact: true,
    component: lazy(() => import('./views/UnautorisedView')),
    private: false,
    restricted: false,
  },
];

export default routes;
