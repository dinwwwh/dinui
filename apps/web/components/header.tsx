import { Github, Twitter } from './icons'
import { Logo } from './logo'
import { Button } from '@dinui/react/button'
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
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-10">
        <Link to={'/'}>
          <Logo className="h-8" />
        </Link>
        <div>
          <LeftNav />
        </div>
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
                <Button size={'lg'} hierarchy={'link-gray'} disabled>
                  {nav.name}
                </Button>
              ) : (
                <Button size={'lg'} hierarchy={'link-gray'} asChild>
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
      <ul className="flex items-center">
        <li>
          <Button size={'icon:md'} hierarchy={'tertiary-gray'} asChild>
            <a
              className="text-tertiary hover:text-tertiary_hover font-semibold transition-colors"
              href={env.GITHUB_REPOSITORY_URL}
            >
              <Github />
            </a>
          </Button>
        </li>

        <li>
          <Button size={'icon:md'} hierarchy={'tertiary-gray'} asChild>
            <a
              className="text-tertiary hover:text-tertiary_hover font-semibold transition-colors"
              href={env.AUTHOR_TWITTER_URL}
            >
              <Twitter />
            </a>
          </Button>
        </li>
      </ul>
    </nav>
  )
}
