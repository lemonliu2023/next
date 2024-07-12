import App from '@/App';
import Home from '@/views/Home';
import { Navigate, RouteObject } from 'react-router-dom';

const routerConfig: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to={'/home'} />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/threejs',
        lazy: async () => {
          return {
            Component: (await import('@/views/Threejs/index.tsx')).default,
          };
        },
        children: [
          {
            path: 'guide',
            lazy: async () => {
              return {
                Component: (await import('@/views/Threejs/Guide/index.tsx'))
                  .default,
              };
            },
            children: [
              {
                path: 'removeMeshTest',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Guide/RemoveMeshTest'))
                      .default,
                  };
                }
              }
            ]
          },
          {
            path: 'examples',
            lazy: async () => {
              return {
                Component: (await import('@/views/Threejs/Examples/index.tsx'))
                  .default,
              };
            },
            children: [
              {
                path: 'wall',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Wall'))
                      .default,
                  };
                },
              },
              {
                path: 'wavelet',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Wavelet'))
                      .default,
                  };
                },
              },
              {
                path: 'radar',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Radar'))
                      .default,
                  };
                },
              },
              {
                path: 'scanQrCode',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/ScanQrCode'))
                      .default,
                  };
                },
              },
              {
                path: 'laser',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Laser'))
                      .default,
                  };
                },
              },
              {
                path: 'glsl',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Glsl'))
                      .default,
                  };
                },
              },
              {
                path: 'tube',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Tube'))
                      .default,
                  };
                },
              },
              {
                path: 'meshline',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Meshline'))
                      .default,
                  };
                },
              },
              {
                path: 'line',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Line'))
                      .default,
                  };
                },
              },
              {
                path: 'mask',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/Mask'))
                      .default,
                  };
                },
              },
              {
                path: 'glowPlaneLine',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/GlowPlaneLine'))
                      .default,
                  };
                },
              },
              {
                path: 'brokenGlowPlaneLine',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/BrokenGlowPlaneLine'))
                      .default,
                  };
                },
              },
              {
                path: 'growBrokenGlowPlaneLine',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/GrowBrokenGlowPlaneLine'))
                      .default,
                  };
                },
              },
              {
                path: 'risePlane',
                lazy: async () => {
                  return {
                    Component: (await import('@/views/Threejs/Examples/RisePlane'))
                      .default,
                  };
                },
              }
            ],
          },
        ],
      },
      {
        path: '/markdown',
        lazy: async () => {
          return {
            Component: (await import('@/views/Markdown')).default,
          };
        },
      },
      {
        path: '/markdown/onlyView/',
        lazy: async () => {
          return {
            Component: (await import('@/views/Markdown/OnlyView/index.tsx'))
              .default,
          };
        },
      },
    ],
  },
];

export default routerConfig;
