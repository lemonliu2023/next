import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/threejs',
    lazy: async () => {
      return ({ Component: (await import('./views/Threejs/index.tsx')).default })
    }
  },
  {
    path: '/markdown',
    lazy: async () => {
      return ({ Component: (await import('./views/Markdown/index.tsx')).default })
    }
  },
  {
    path: '/markdown/onlyView/',
    lazy: async () => {
      return ({ Component: (await import('./views/Markdown/OnlyView/index.tsx')).default })
    }
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
