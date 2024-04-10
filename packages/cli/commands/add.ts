import { env } from '../env'
import { getDinUIComponents, isDinUIInstalledCorrectly } from '../utils/project-infos'
import chalk from 'chalk'
import { Command, program } from 'commander'
import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'

export const add = new Command()
  .name('add')
  .description('add one or many component to your project')
  .argument('[components...]', 'the components to add')
  .option('-d, --dir <directory>', 'the relative directory path to add the component to.')
  .option('-y, --yes', 'skip confirmation prompt.', false)
  .option('-o, --overwrite', 'overwrite existing components.', false)
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory.',
    process.cwd(),
  )
  .showHelpAfterError(chalk.blue('info: add --help for additional information '))
  .action(
    async (
      components: string[],
      opts: {
        directory?: string
        yes: boolean
        overwrite: boolean
        cwd: string
      },
    ) => {
      if (!(await isDinUIInstalledCorrectly(opts))) {
        program.error(
          chalk.red(
            `error: ${env.PROJECT_NAME} not detected - please install first ${env.DOCS_URL}`,
          ),
        )
      }

      const availableComponents = await getDinUIComponents(opts)

      for (const component of components) {
        if (!availableComponents.includes(component)) {
          program.error(
            chalk.red(
              `error: [${component}] component does not exist, please try updating ${env.PROJECT_NAME}`,
            ),
          )
        }
      }

      if (!components.length) {
        const choices = availableComponents.map((name) => ({
          title: name,
          value: name,
        }))

        const answers = await prompts({
          name: 'components',
          type: 'autocompleteMultiselect',
          message: 'Pick components',
          choices,
          instructions: false,
        })

        components.push(...answers.components)
      }

      if (!opts.directory) {
        const initial = (await fs.exists(path.resolve(opts.cwd, './src')))
          ? './src/components/ui'
          : './components/ui'

        const answers = await prompts({
          name: 'directory',
          type: 'text',
          initial,
          message: 'Where components place',
          instructions: false,
        })

        opts.directory = answers.directory
      }
    },
  )
