import { lazy } from 'react';

const routes = [
  {
    path: '/',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/HomeView')),
    private: true,
    restricted: false,
  },
  {
    path: '/login',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/LoginView')),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/RegisterView')),
    private: false,
    restricted: false,
  },
  {
    path: '/projects',
    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/Projects/Projects.js')),
    private: false,
    restricted: false,
  },

  {
    // path: '/projects/:projectId/:sprintId',
    path: '/projects/sprint',

    label: 'Home',
    exact: true,
    component: lazy(() => import('./views/SprintPage/SprintPage.js')),
    private: false,
    restricted: false,
  },
];

export default routes;
