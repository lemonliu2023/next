import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import MarkDown from './views/MarkDown/index.tsx';
import Threejs from './views/Threejs/index.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to={'/threejs'} replace />
      },
      {
        path: 'threejs',
        element: <Threejs />,
      },
      {
        path: 'markdown',
        element: <MarkDown />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
