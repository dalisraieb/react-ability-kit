import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/react-ability-kit/search',
    component: ComponentCreator('/react-ability-kit/search', '098'),
    exact: true
  },
  {
    path: '/react-ability-kit/docs',
    component: ComponentCreator('/react-ability-kit/docs', '9c9'),
    routes: [
      {
        path: '/react-ability-kit/docs',
        component: ComponentCreator('/react-ability-kit/docs', 'cb2'),
        routes: [
          {
            path: '/react-ability-kit/docs',
            component: ComponentCreator('/react-ability-kit/docs', '826'),
            routes: [
              {
                path: '/react-ability-kit/docs/',
                component: ComponentCreator('/react-ability-kit/docs/', '444'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/api-reference',
                component: ComponentCreator('/react-ability-kit/docs/api-reference', '4e0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/best-practices',
                component: ComponentCreator('/react-ability-kit/docs/best-practices', '96d'),
                exact: true
              },
              {
                path: '/react-ability-kit/docs/creating-an-ability',
                component: ComponentCreator('/react-ability-kit/docs/creating-an-ability', 'e13'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/defining-permission-vocabulary',
                component: ComponentCreator('/react-ability-kit/docs/defining-permission-vocabulary', '257'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/defining-policies',
                component: ComponentCreator('/react-ability-kit/docs/defining-policies', '243'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/demo',
                component: ComponentCreator('/react-ability-kit/docs/demo', 'a1a'),
                exact: true
              },
              {
                path: '/react-ability-kit/docs/faq',
                component: ComponentCreator('/react-ability-kit/docs/faq', 'a23'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/ownership-rules',
                component: ComponentCreator('/react-ability-kit/docs/ownership-rules', '06f'),
                exact: true
              },
              {
                path: '/react-ability-kit/docs/quick-start',
                component: ComponentCreator('/react-ability-kit/docs/quick-start', '1e1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/react-integration',
                component: ComponentCreator('/react-ability-kit/docs/react-integration', '43e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/real-world-example',
                component: ComponentCreator('/react-ability-kit/docs/real-world-example', '6d3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/ssr-support',
                component: ComponentCreator('/react-ability-kit/docs/ssr-support', '582'),
                exact: true
              },
              {
                path: '/react-ability-kit/docs/type-safety',
                component: ComponentCreator('/react-ability-kit/docs/type-safety', 'dcc'),
                exact: true
              },
              {
                path: '/react-ability-kit/docs/using-can-function',
                component: ComponentCreator('/react-ability-kit/docs/using-can-function', '95d'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-ability-kit/',
    component: ComponentCreator('/react-ability-kit/', '3e2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
