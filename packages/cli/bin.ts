#!/usr/bin/env node
import { add } from './commands/add'
import { env } from './env'
import { getPackageInfo } from './utils/package'
import { intro } from '@clack/prompts'
import { Command } from 'commander'
import color from 'picocolors'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const packageInfo = await getPackageInfo()

  const program = new Command()
    .name('@dinui/cli')
    .description('add components and dependencies to your project')
    .version(packageInfo.version || 'Unknown', '-v, --version', 'display the version number')
    .showHelpAfterError(color.blue('info: add --help for additional information '))
    .addCommand(add)

  program.parse()
}

main()
