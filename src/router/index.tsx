import { createBrowserRouter, RouteObject } from 'react-router-dom';

import ErrorBoundary from '#/components/ErrorBoundary';
import Layout from '#/components/Layout';
import ColumnPage from '#/pages/column-page';
import MyRecordPage from '#/pages/my-record-page';
import NotFound from '#/pages/notfound';
import TopPage from '#/pages/top-page';

function getRootLevelRoute({ ...params }: RouteObject): RouteObject {
  return {
    ...params,
    errorElement: <ErrorBoundary />,
  };
}

const routes: RouteObject[] = [
  getRootLevelRoute({
    path: '/',
    element: (
      <Layout>
        <TopPage />
      </Layout>
    ),
    children: [
      {
        path: 'top',
        index: true,
      },
    ],
  }),
  getRootLevelRoute({
    path: '/my-record',
    element: (
      <Layout>
        <MyRecordPage />
      </Layout>
    ),
  }),
  getRootLevelRoute({
    path: '/column',
    element: (
      <Layout>
        <ColumnPage />
      </Layout>
    ),
  }),
  getRootLevelRoute({
    path: '*',
    element: <NotFound />,
  }),
];

const router = createBrowserRouter(routes);

export default router;
