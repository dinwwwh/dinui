import { docs } from './.velite/index'
import { MainErrorBoundary, MainLayout } from './layouts/main.tsx'
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
        index: true,
        lazy: () => import('./pages/home'),
        entry: './pages/home.tsx',
      },
      {
        path: 'docs/:category/:name',
        lazy: () => import('./pages/doc-detail'),
        entry: './pages/doc-detail.tsx',
        getStaticPaths() {
          return docs.map((doc) => 'docs/' + doc.relativePath)
        },
      },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
