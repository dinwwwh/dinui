import { env } from '../env'
import { getPersistedOption, setPersistedOption } from '../utils/options'
import { getDinUIComponents, isDinUIInstalledCorrectly } from '../utils/project-infos'
import chalk from 'chalk'
import { Command, program } from 'commander'
import fs from 'fs-extra'
import ora from 'ora'
import path from 'path'
import detachPreferredPM from 'preferred-pm'
import prompts from 'prompts'
import { $ } from 'zx'

export const add = new Command()
  .name('add')
  .description('add one or many components to your project')
  .argument('[components...]', 'the components to add')
  .option('-d, --dir <directory>', 'the relative directory path to add the component to.')
  .option('-o, --override', 'overwrite existing components.', false)
  .option('-a, --all', 'add all available components.', false)
  .option(
    '-c, --cwd <cwd>',
    'the working directory. defaults to the current directory.',
    process.cwd(),
  )
  .showHelpAfterError(chalk.blue('info: add --help for additional information '))
  .action(
    async (
      _components: string[],
      _opts: {
        dir?: string
        all: boolean
        override: boolean
        cwd: string
      },
    ) => {
      const { cwd, all, override } = _opts

      if (!(await isDinUIInstalledCorrectly({ cwd }))) {
        program.error(
          chalk.red(
            `error: ${env.PROJECT_NAME} not detected - please install first ${env.DOCS_URL}`,
          ),
        )
      }

      const availableComponents = await getDinUIComponents({ cwd })

      const components = await (async () => {
        if (all) return availableComponents
        if (_components.length > 0) return _components

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

        return answers.components as string[]
      })()

      for (const component of components) {
        if (!availableComponents.includes(component)) {
          program.error(
            chalk.red(
              `error: "${component}" component does not exist, please try updating ${env.PROJECT_NAME}.`,
            ),
          )
        }
      }

      const directory = await (async () => {
        if (_opts.dir) return _opts.dir

        const initial =
          (await getPersistedOption('add_initialDirectory', { cwd })) ||
          ((await fs.exists(path.resolve(_opts.cwd, './src')))
            ? './src/components/ui'
            : './components/ui')

        const answers = await prompts({
          name: 'directory',
          type: 'text',
          initial,
          message: 'Where components place',
          instructions: false,
        })

        return answers.directory as string
      })()
      directory && (await setPersistedOption('add_initialDirectory', directory, { cwd }))

      for (const component of components) {
        const spinner = ora(`Adding "${component}" component...`).start()

        const componentDir = path.resolve(cwd, directory)
        const componentPath = path.resolve(componentDir, `${component}.tsx`)
        const componentCode = await fs.readFile(
          path.resolve(cwd, `./node_modules/@dinui/react/ui/${component}.tsx`),
          { encoding: 'utf8' },
        )
        const isComponentExisted = await fs.exists(componentPath)

        if (isComponentExisted && !override) {
          spinner.stop()
          const answers = await prompts({
            name: 'override',
            type: 'confirm',
            message: `The "${component}" component already exists, would you like to overwrite?`,
            initial: true,
          })

          if (!answers.override) continue
        }

        spinner.start(`Adding "${component}" component...`)
        await fs.ensureDir(componentDir)
        await fs.writeFile(path.resolve(cwd, directory, `${component}.tsx`), componentCode)

        spinner.text = `Installing dependencies for "${component}" component...`
        const dependencies = [
          ...componentCode.matchAll(
            /from '((@[a-z0-9-~][a-z0-9-._~]*\/)?([a-z0-9-~][a-z0-9-._~]*))/g,
          ),
        ]
          .map((m) => m[1] as string)
          .filter((d) => !['react'].includes(d))

        if (dependencies.length) {
          try {
            const pm = await detachPreferredPM(cwd)
            if (!pm) throw new Error('Cannot detach preferred package manager.')

            $.cwd = path.resolve(cwd)
            await $`${pm.name} ${pm.name === 'npm' ? 'install' : 'add'} ${dependencies}`
          } catch (e) {
            spinner.fail(`The "${component}" component failed when installing dependencies.`)
            continue
          }
        }

        spinner.succeed(`The "${component}" component successfully added to your project!`)
      }
    },
  )
