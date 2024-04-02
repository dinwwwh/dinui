import { docs } from './.velite/index'
import { NotFoundScreen } from './components/not-found-screen'
import { AppLayout } from './layouts/app-layout'
import { MainErrorBoundary, MainLayout } from './layouts/main-layout'
import './styles/globals.css'
import { ViteReactSSG } from 'vite-react-ssg'
import type { RouteRecord } from 'vite-react-ssg'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <MainErrorBoundary />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            index: true,
            lazy: () => import('./pages/home'),
            entry: './pages/home.tsx',
          },
          {
            path: 'docs',
            lazy: () => import('./layouts/docs-layout'),
            children: [
              {
                path: '*?',
                lazy: () => import('./pages/doc-detail'),
                entry: './pages/doc-detail.tsx',
                getStaticPaths() {
                  return docs.map((doc) => doc.relativePath)
                },
              },
            ],
          },
          {
            path: '404',
            element: <NotFoundScreen />,
          },
          {
            path: '*',
            element: <NotFoundScreen />,
          },
        ],
      },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
