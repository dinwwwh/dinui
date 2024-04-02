import { Github } from '@web/components/icons'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@web/components/page-header'
import { buttonVariants } from '@web/components/ui/button'
import { env } from '@web/env'
import { cn } from '@web/lib/utils'
import { Link } from 'vite-react-ssg'

export function Component() {
  return (
    <div className="container relative">
      <PageHeader>
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your apps. Accessible.
          Customizable. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Link to="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <a
            href={env.GITHUB_REPOSITORY_URL}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </PageActions>
      </PageHeader>
    </div>
  )
}
