import { createBrowserRouter } from 'react-router-dom';
import Admin from '../layouts/Admin';
import Public from '../layouts/Public';
import adminRoutes from './adminRoutes';
import publicRoutes from './publicRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Public />,
    children: publicRoutes,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: adminRoutes,
  },
  { path: '*', element: <div>Erro</div> },
]);

export default router;
