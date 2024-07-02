import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Markdown from './views/Markdown/index.tsx';
import Threejs from './views/Threejs/index.tsx';
import OnlyView from './views/Markdown/OnlyView/index.tsx';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   path: '',
      //   element: <Navigate to={'/threejs'} replace />,
      // },
    ],
  },
  {
    path: '/threejs',
    element: <Threejs />,
  },
  {
    path: '/markdown',
    element: <Markdown />,
    children: [
      // {
      //   path: 'onlyView',
      //   element: <OnlyView />,
      // },
    ],
  },
  {
    path: '/markdown/onlyView/',
    element: <OnlyView />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
