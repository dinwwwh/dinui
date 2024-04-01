import { Logo } from './logo'
import { Button } from '@dinui/react/button'
import { env } from '@web/env'
import { Link } from 'vite-react-ssg'

const navItems = [
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

export function Footer() {
  return (
    <footer className="pt-16">
      <div className="flex flex-col items-center">
        <div>
          <Link to={'/'}>
            <Logo className="h-8" />
            <span className="sr-only">Homepage</span>
          </Link>
        </div>

        <div className="mt-8">
          <Nav />
        </div>
      </div>

      <div className="mt-16 text-gray-500 pt-8 border-t border-gray-200 text-sm">
        <div className="flex gap-5 justify-between items-center flex-wrap">
          <p>
            Built by{' '}
            <Button variant={'link-color'} asChild>
              <a href={env.AUTHOR_TWITTER_URL}>Din</a>
            </Button>
            . The source code is available on{' '}
            <Button variant={'link-color'} asChild>
              <a href={env.GITHUB_REPOSITORY_URL}>GitHub</a>
            </Button>
            .
          </p>

          <p>MIT License</p>
        </div>
      </div>
    </footer>
  )
}

function Nav() {
  return (
    <nav>
      <ul className="flex gap-x-8 gap-y-4 flex-wrap justify-center">
        {navItems.map((item) => {
          return (
            <li key={item.href}>
              {('disabled' in item ? item.disabled : false) ? (
                <Button variant={'link-gray'} disabled>
                  {item.name}
                </Button>
              ) : (
                <Button variant={'link-gray'} asChild>
                  <Link to={item.href}>{item.name}</Link>
                </Button>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
