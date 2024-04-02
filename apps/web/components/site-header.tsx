import { Github, Twitter } from './icons'
import { Logo } from './logo'
import { MobileNav } from './mobile-nav'
import { ModeToggle } from './mode-toggle'
import { Button, buttonVariants } from './ui/button'
import { env } from '@web/env'
import { cn } from '@web/lib/utils'
import { useLocation } from 'react-router-dom'
import { Link } from 'vite-react-ssg'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* TODO */}
            <Button
              variant="outline"
              className={cn(
                'relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-gray-700 shadow-none sm:pr-12 md:w-40 lg:w-64',
              )}
            >
              <span className="hidden lg:inline-flex">Search documentation...</span>
              <span className="inline-flex lg:hidden">Search...</span>
              <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
          <nav className="flex items-center">
            <a href={env.GITHUB_REPOSITORY_URL} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a href={env.AUTHOR_TWITTER_URL} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

;('use client')

export function MainNav() {
  const { pathname } = useLocation()

  return (
    <div className="mr-4 hidden md:flex">
      <Link to="/" className="mr-6 flex items-center space-x-2">
        <Logo className="h-6" />
        <span className="hidden font-bold sm:inline-block sr-only">Homepage</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          to="/docs"
          className={cn(
            'transition-colors hover:text-gray-900/80',
            pathname === '/docs' ? 'text-gray-900' : 'text-gray-900/60',
          )}
        >
          Docs
        </Link>
        <Link
          to="/docs/components"
          className={cn(
            'transition-colors hover:text-gray-900/80',
            pathname?.startsWith('/docs/components') ? 'text-gray-900' : 'text-gray-900/60',
          )}
        >
          Components
        </Link>
        <Link
          to="/themes"
          className={cn(
            'transition-colors hover:text-gray-900/80',
            pathname?.startsWith('/themes') ? 'text-gray-900' : 'text-gray-900/60',
          )}
        >
          Themes
        </Link>
        <Link
          to="/examples"
          className={cn(
            'transition-colors hover:text-gray-900/80',
            pathname?.startsWith('/examples') ? 'text-gray-900' : 'text-gray-900/60',
          )}
        >
          Examples
        </Link>
        <Link
          to="/blocks"
          className={cn(
            'transition-colors hover:text-gray-900/80',
            pathname?.startsWith('/blocks') ? 'text-gray-900' : 'text-gray-900/60',
          )}
        >
          Blocks
        </Link>
        <Link
          to={env.GITHUB_REPOSITORY_URL}
          className={cn(
            'hidden text-gray-900/60 transition-colors hover:text-gray-900/80 lg:block',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
