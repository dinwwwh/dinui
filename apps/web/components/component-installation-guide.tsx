import { Callout } from './callout'
import { CopyPasteComponentCode } from './copy-paste-component-code'
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
          <Tabs.List.Trigger value="cli" disabled>
            CLI
          </Tabs.List.Trigger>
          <Tabs.List.Trigger value="manual">Manual</Tabs.List.Trigger>
        </Tabs.List>
        <Tabs.Content value="default">
          <InstallationNote />
        </Tabs.Content>
        <Tabs.Content value="manual">
          <InstallationNote />

          <Steps>
            <Steps.Heading>Install dependencies</Steps.Heading>
            <UnifiedPackageManager action="add" name="" />
            <Steps.Heading>Copy and paste the following code into your project</Steps.Heading>
            <CopyPasteComponentCode path={path} />
          </Steps>
        </Tabs.Content>
      </Tabs>
    </div>
  )
}

function InstallationNote() {
  return (
    <Callout type="note">
      You need to follow the instructions in the{' '}
      <Link
        to={'/installation'}
        className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-400/80"
      >
        Installation Instructions
      </Link>{' '}
      section to use it.
    </Callout>
  )
}
