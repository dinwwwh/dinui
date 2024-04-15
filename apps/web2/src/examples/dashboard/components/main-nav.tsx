import { cn } from '@dinui/react/utils'

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)} {...props}>
      <a
        href="#"
        className="text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      >
        Overview
      </a>
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      >
        Customers
      </a>
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      >
        Products
      </a>
      <a
        href="#"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-gray-900 dark:hover:text-gray-50"
      >
        Settings
      </a>
    </nav>
  )
}
