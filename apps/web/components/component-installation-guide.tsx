import { Callout } from './callout'
import {
  ComponentDependenciesInstallation,
  CopyPasteComponentCode,
} from './copy-paste-component-code'
import { Steps } from './steps'
import { Tabs } from './tabs'
import { UnifiedPackageManager } from './unified-package-manager'
import { cn } from '@dinui/react/utils'
import { Link } from 'react-router-dom'

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  path: string
}

export function ComponentInstallationGuide({ path, ...props }: Props) {
  return (
    <div {...props} className={cn('group relative my-4 flex flex-col space-y-2', props.className)}>
      <Tabs defaultValue="default" className="relative mr-auto w-full">
        <Tabs.List>
          <Tabs.List.Trigger value="default">Default</Tabs.List.Trigger>
          <Tabs.List.Trigger value="cli">CLI</Tabs.List.Trigger>
          <Tabs.List.Trigger value="manual">Manual</Tabs.List.Trigger>
        </Tabs.List>
        <Tabs.Content value="default">
          <Steps>
            <GlobalStartStep />

            {props.children}
            <GlobalEndStep />
          </Steps>
        </Tabs.Content>
        <Tabs.Content value="cli">
          <Steps>
            <GlobalStartStep />

            <Steps.Heading>Run the following command in your project</Steps.Heading>
            <UnifiedPackageManager
              action="dlx"
              name={`@dinui/cli@latest add ${path.replace(/(.\/)?ui\//, '')} -d ./components/ui`}
            />

            <Steps.Heading>Update the import paths to match your project setup</Steps.Heading>
            {props.children}
            <GlobalEndStep />
          </Steps>
        </Tabs.Content>
        <Tabs.Content value="manual">
          <Steps>
            <GlobalStartStep />

            <Steps.Heading>Install dependencies</Steps.Heading>
            <ComponentDependenciesInstallation path={path} />
            <Steps.Heading>Copy and paste the following code into your project</Steps.Heading>
            <CopyPasteComponentCode path={path} />
            {props.children}

            <Steps.Heading>Update the import paths to match your project setup</Steps.Heading>
            <GlobalEndStep />
          </Steps>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

function GlobalStartStep() {
  return (
    <>
      <Steps.Heading>
        Follow{' '}
        <Link
          to={'/installation'}
          className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-400/80"
        >
          Installation Guide
        </Link>{' '}
      </Steps.Heading>
      To enable DinUI functionality in your project, you will need to properly set up Tailwind and
      install the necessary dependencies.
    </>
  )
}

function GlobalEndStep() {
  return (
    <>
      <Steps.Heading>All done</Steps.Heading>
      You now can start using this component in your project.
    </>
  )
}
