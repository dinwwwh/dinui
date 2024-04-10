import { env } from '../env'
import { getDinUIComponents, isDinUIInstalledCorrectly } from '../utils/project-infos'
import chalk from 'chalk'
import { Command, program } from 'commander'
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

      if (!components.length) {
        const choices = (await getDinUIComponents(opts)).map((name) => ({
          title: name,
          value: name,
        }))

        const { components } = await prompts({
          name: 'components',
          type: 'autocompleteMultiselect',
          message: 'Pick components',
          choices,
          instructions: false,
        })

        console.log(components)
      }
    },
  )
