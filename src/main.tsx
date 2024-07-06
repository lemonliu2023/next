import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import routerConfig from './router/index.tsx';

const router = createHashRouter(routerConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);
