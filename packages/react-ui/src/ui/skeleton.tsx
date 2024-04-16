import { twMerge } from 'tailwind-merge'

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge('animate-pulse rounded-md bg-wgray-900/10 dark:bg-wgray-50/10', className)}
      {...props}
    />
  )
}
