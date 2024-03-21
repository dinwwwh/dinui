import { MainErrorBoundary, MainLayout } from './layouts/main.tsx'
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
        lazy: () => import('./pages/home.tsx'),
        entry: './pages/home.tsx',
      },
    ],
  },
]

export const createRoot = ViteReactSSG({ routes })
