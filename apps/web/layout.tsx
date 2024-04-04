import { Toaster as SonnerToaster } from '@dinui/react/sonner'
import { Toaster } from '@dinui/react/toaster'

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Toaster />
      <SonnerToaster />
    </>
  )
}
