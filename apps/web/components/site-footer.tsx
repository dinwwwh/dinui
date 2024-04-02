import { env } from '@web/env'

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-gray-700 md:text-left">
          Built by{' '}
          <a
            href={env.AUTHOR_TWITTER_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Din
          </a>
          . The source code is available on{' '}
          <a
            href={env.GITHUB_REPOSITORY_URL}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
