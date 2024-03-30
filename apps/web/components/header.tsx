import { Github, Twitter } from './icons'
import { Logo } from './logo'
import { Button } from '@dinui/react/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@dinui/react/sheet'
import { Menu01 } from '@untitled-ui/icons-react'
import { env } from '@web/env'
import { Link } from 'vite-react-ssg'

const mainNavItems = [
  {
    name: 'Docs',
    href: '/docs',
  },
  {
    name: 'Components',
    href: '/docs/components',
    disabled: true,
  },
  {
    name: 'Themes',
    href: '/theme',
    disabled: true,
  },
  {
    name: 'Examples',
    href: '/examples',
    disabled: true,
  },
]

export function Header() {
  return (
    <header className="@container flex items-center justify-between gap-4">
      <div className="hidden @3xl:flex items-center gap-10">
        <Link to={'/'}>
          <Logo className="h-7" />
          <span className="sr-only">Homepage</span>
        </Link>
        <div>
          <LeftNav />
        </div>
      </div>

      <div className="flex @3xl:hidden">
        <SheetMenu />
      </div>

      <RightNav />
    </header>
  )
}

function LeftNav() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {mainNavItems.map((nav) => {
          const disabled = 'disabled' in nav ? nav.disabled : false
          return (
            <li key={nav.href}>
              {disabled ? (
                <Button variant={'link-gray'} disabled>
                  {nav.name}
                </Button>
              ) : (
                <Button variant={'link-gray'} asChild>
                  <Link to={nav.href}>{nav.name}</Link>
                </Button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function RightNav() {
  return (
    <nav>
      <ul className="flex items-center gap-1">
        <li>
          <Button size={'icon:sm'} variant={'tertiary-gray'} asChild>
            <a
              className="text-tertiary hover:text-tertiary_hover font-semibold transition-colors"
              href={env.GITHUB_REPOSITORY_URL}
            >
              <Github className="size-[1.075rem]" />
            </a>
          </Button>
        </li>

        <li>
          <Button size={'icon:sm'} variant={'tertiary-gray'} asChild>
            <a
              className="text-tertiary hover:text-tertiary_hover font-semibold transition-colors"
              href={env.AUTHOR_TWITTER_URL}
            >
              <Twitter className="size-[1.075rem]" />
            </a>
          </Button>
        </li>
      </ul>
    </nav>
  )
}

function SheetMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'tertiary-gray'} size={'icon:md'}>
          <Menu01 />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle asChild>
            <Link to={'/'}>
              <Logo className="h-7" />
              <span className="sr-only">Homepage</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <nav className="px-6  py-8">
          <ul className="flex flex-col items-start gap-5">
            {mainNavItems.map((nav) => {
              const disabled = 'disabled' in nav ? nav.disabled : false
              return (
                <li key={nav.href}>
                  {disabled ? (
                    <Button size={'lg'} variant={'link-gray'} disabled>
                      {nav.name}
                    </Button>
                  ) : (
                    <Button size={'lg'} variant={'link-gray'} asChild>
                      <Link to={nav.href}>{nav.name}</Link>
                    </Button>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
