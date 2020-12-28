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
    label: 'Projects',
    exact: true,
    component: lazy(() => import('./views/ProjectsView')),
    private: false,
    restricted: false,
  },
  {
    path: '/projects/:id',
    label: 'SingleProj',
    exact: true,
    component: lazy(() => import('./views/ProjectDetailsView')),
    private: false,
    restricted: false,
  },
];

export default routes;
