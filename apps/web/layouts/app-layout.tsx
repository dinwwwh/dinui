import { SiteFooter } from '@web/components/site-footer'
import { SiteHeader } from '@web/components/site-header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
