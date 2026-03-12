import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/react-ability-kit/__docusaurus/debug',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug', '84b'),
    exact: true
  },
  {
    path: '/react-ability-kit/__docusaurus/debug/config',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug/config', 'e2f'),
    exact: true
  },
  {
    path: '/react-ability-kit/__docusaurus/debug/content',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug/content', '740'),
    exact: true
  },
  {
    path: '/react-ability-kit/__docusaurus/debug/globalData',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug/globalData', 'cdd'),
    exact: true
  },
  {
    path: '/react-ability-kit/__docusaurus/debug/metadata',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug/metadata', 'd40'),
    exact: true
  },
  {
    path: '/react-ability-kit/__docusaurus/debug/registry',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug/registry', '2b8'),
    exact: true
  },
  {
    path: '/react-ability-kit/__docusaurus/debug/routes',
    component: ComponentCreator('/react-ability-kit/__docusaurus/debug/routes', '058'),
    exact: true
  },
  {
    path: '/react-ability-kit/search',
    component: ComponentCreator('/react-ability-kit/search', '098'),
    exact: true
  },
  {
    path: '/react-ability-kit/docs',
    component: ComponentCreator('/react-ability-kit/docs', 'bba'),
    routes: [
      {
        path: '/react-ability-kit/docs',
        component: ComponentCreator('/react-ability-kit/docs', '6c0'),
        routes: [
          {
            path: '/react-ability-kit/docs',
            component: ComponentCreator('/react-ability-kit/docs', '543'),
            routes: [
              {
                path: '/react-ability-kit/docs/',
                component: ComponentCreator('/react-ability-kit/docs/', '444'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/best-practices',
                component: ComponentCreator('/react-ability-kit/docs/best-practices', '959'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/creating-an-ability',
                component: ComponentCreator('/react-ability-kit/docs/creating-an-ability', 'e13'),
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
                component: ComponentCreator('/react-ability-kit/docs/demo', '6e1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/faq',
                component: ComponentCreator('/react-ability-kit/docs/faq', 'a23'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/getting-started',
                component: ComponentCreator('/react-ability-kit/docs/getting-started', '8e2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/ownership-rules',
                component: ComponentCreator('/react-ability-kit/docs/ownership-rules', '3db'),
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
                component: ComponentCreator('/react-ability-kit/docs/ssr-support', '4a0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/type-safety',
                component: ComponentCreator('/react-ability-kit/docs/type-safety', '248'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/react-ability-kit/docs/using-can-function',
                component: ComponentCreator('/react-ability-kit/docs/using-can-function', 'b7c'),
                exact: true,
                sidebar: "docsSidebar"
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
