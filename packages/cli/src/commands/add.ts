import { env } from '../env'
import { getPersistedOption, setPersistedOption } from '../utils/options'
import chalk from 'chalk'
import { Command, program } from 'commander'
import fs from 'fs-extra'
import ora from 'ora'
import path from 'path'
import detachPreferredPM from 'preferred-pm'
import prompts from 'prompts'
import { getComponentDependencies, loadComponentCode, loadComponents } from 'utils/components'
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
      try {
        const { cwd, all, override } = _opts

        const availableComponents = await loadComponents({ cwd })

        if (!availableComponents.length) {
          program.error(
            chalk.red(
              `error: ${env.PROJECT_NAME} not detected - please install first ${env.DOCS_URL}`,
            ),
          )
        }

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

        const componentDir = path.resolve(cwd, directory)

        for (const component of components) {
          const spinner = ora(`Adding "${component}" component...`).start()

          const componentPath = path.resolve(componentDir, `${component}.tsx`)
          const componentCode = await loadComponentCode({ cwd, name: component })
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
          const componentDependencies = getComponentDependencies({ code: componentCode })

          if (componentDependencies.length) {
            try {
              const pm = await detachPreferredPM(cwd)
              if (!pm) throw new Error('Cannot detach preferred package manager.')

              $.cwd = path.resolve(cwd)
              await $`${pm.name} ${pm.name === 'npm' ? 'install' : 'add'} ${componentDependencies}`
            } catch (e) {
              spinner.fail(`The "${component}" component failed when installing dependencies.`)
              continue
            }
          }

          spinner.succeed(`The "${component}" component successfully added to your project!`)
        }
      } catch (e) {
        program.error(chalk.red(e))
      }
    },
  )
