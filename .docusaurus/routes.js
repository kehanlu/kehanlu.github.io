import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/doc',
    component: ComponentCreator('/doc', 'f59'),
    routes: [
      {
        path: '/doc/',
        component: ComponentCreator('/doc/', '614'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1a5'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
