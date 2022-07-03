import { lazy } from 'react';

import Login from '../pages/login';
import Home from '../pages/home';
import User from '../pages/users';

const protectedRoutes = [
  {
    path: '',
    component: <Home />,
    exact: true
  },
  {
    path: '/users',
    component: <User />,
    exact: true
  }
];


const publicRoutes = [
    {
      path: 'login',
      component: <Login />,
      exact: true,
    }
  ];

export {
    protectedRoutes,
    publicRoutes
};