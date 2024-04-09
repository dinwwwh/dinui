import { Tabs } from './tabs'
import { Button } from '@dinui/react/button'
import { IconCheck, IconCopy } from '@tabler/icons-react'
import { useClipboard } from 'foxact/use-clipboard'
import { useLocalStorage } from 'foxact/use-local-storage'
import { match } from 'ts-pattern'

type Props = {
  action: 'add' | 'dlx'
  name: string
}

type PackageManagers = 'pnpm' | 'npm' | 'yarn' | 'bun'

export function UnifiedPackageManager({ action, name }: Props) {
  const [_manager, setManager] = useLocalStorage<PackageManagers>('package-manager', 'pnpm')
  const manager = _manager || 'pnpm'
  const { copy, copied } = useClipboard()

  const cli = match(manager)
    .with('pnpm', () => {
      return match(action)
        .with('add', () => ({
          base: 'pnpm',
          args: `add ${name}`,
          full: `pnpm add ${name}`,
        }))
        .with('dlx', () => ({
          base: 'pnpm',
          args: `dlx ${name}`,
          full: `pnpm dlx ${name}`,
        }))
        .exhaustive()
    })
    .with('npm', () => {
      return match(action)
        .with('add', () => ({
          base: 'npm',
          args: `install ${name}`,
          full: `npm install ${name}`,
        }))
        .with('dlx', () => ({
          base: 'npx',
          args: `${name}`,
          full: `npx ${name}`,
        }))
        .exhaustive()
    })
    .with('yarn', () => {
      return match(action)
        .with('add', () => ({
          base: 'yarn',
          args: `add ${name}`,
          full: `yarn add ${name}`,
        }))
        .with('dlx', () => ({
          base: 'yarn',
          args: `dlx ${name}`,
          full: `yarn dlx ${name}`,
        }))
        .exhaustive()
    })
    .with('bun', () => {
      return match(action)
        .with('add', () => ({
          base: 'bun',
          args: `add ${name}`,
          full: `bun add ${name}`,
        }))
        .with('dlx', () => ({
          base: 'bunx',
          args: `${name}`,
          full: `bunx ${name}`,
        }))
        .exhaustive()
    })
    .exhaustive()

  return (
    <Tabs value={manager} onValueChange={(v) => setManager(v as PackageManagers)}>
      <Tabs.List>
        <Tabs.List.Trigger value="pnpm">pnpm</Tabs.List.Trigger>
        <Tabs.List.Trigger value="npm">npm</Tabs.List.Trigger>
        <Tabs.List.Trigger value="yarn">yarn</Tabs.List.Trigger>
        <Tabs.List.Trigger value="bun">bun</Tabs.List.Trigger>
      </Tabs.List>

      <div className="bg-[color:var(--vocs-color\_codeBlockBackground)] rounded-md border px-5 relative h-11 flex items-center">
        <span className="font-mono text-sm font-semibold text-gray-950 dark:text-white">
          {cli.base}
        </span>
        <span className="font-mono text-sm text-gray-500 dark:text-gray-300">&nbsp;{cli.args}</span>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="size-6 absolute top-1/2 -translate-y-1/2 right-3 text-gray-700 dark:text-gray-300"
          onClick={() => copy(cli.full)}
        >
          {copied ? <IconCheck className="size-3.5" /> : <IconCopy className="size-3.5" />}
        </Button>
      </div>
    </Tabs>
  )
}
