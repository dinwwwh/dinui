#!/usr/bin/env node
import { add } from './commands/add'
import { getCliVersion } from './utils/cli-infos'
import chalk from 'chalk'
import { Command } from 'commander'

process.on('exit', (code) => process.exit(code))
process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const program = new Command()
    .name('@dinui/cli')
    .description('add components and dependencies to your project')
    .version(await getCliVersion(), '-v, --version', 'display the version number')
    .showHelpAfterError(chalk.blue('info: add --help for additional information'))
    .addCommand(add)

  program.parse()
}

main()
