'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, toast } from 'sonner'

export { toast }

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-white group-[.toaster]:text-wgray-950 group-[.toaster]:border-wgray-200 dark:border-wgray-800 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-wgray-950 dark:group-[.toaster]:text-wgray-50 dark:group-[.toaster]:border-wgray-800',
          description: 'group-[.toast]:text-wgray-500 dark:group-[.toast]:text-wgray-400',
          actionButton:
            'group-[.toast]:bg-wgray-900 group-[.toast]:text-wgray-50 dark:group-[.toast]:bg-wgray-50 dark:group-[.toast]:text-wgray-900',
          cancelButton:
            'group-[.toast]:bg-wgray-100 group-[.toast]:text-wgray-500 dark:group-[.toast]:bg-wgray-800 dark:group-[.toast]:text-wgray-400',
        },
      }}
      {...props}
    />
  )
}
