import React from 'react';

const AdminDashboard = React.lazy(() => import('dashboard/AdminDashboard'));
const AdminDetails = React.lazy(() => import('detail/AdminDetails'));

const adminRoutes: Route[] = [
  {
    path: '',
    element: <div>home</div>,
  },
  {
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    path: 'details',
    element: <AdminDetails />,
  },
];

export default adminRoutes;
